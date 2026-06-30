import User from "../models/User.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req, res)=>{
    console.log("Webhook hit");
    try {
        // Create a Svix instance with clerk webhook secret.
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        // Getting Headers
        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        };

        // Verifying Headers
        await whook.verify(JSON.stringify(req.body), headers)

        // Getting Data from request body
        const {data, type} = req.body

        

        //switch cases for diff events
        switch (type) {
            case "user.created": {
                const userData = {
                    _id: data.id,
                    email: data.email_addresses?.[0]?.email_address || "",
                    username: data.first_name + " " + data.last_name,
                    image: data.image_url,
                }
                await User.create(userData);
                break;
            }

            case "user.updated": {
                const userData = {
                    _id: data.id,
                    email: data.email_addresses?.[0]?.email_address || "",
                    username: data.first_name + " " + data.last_name,
                    image: data.image_url,
                }
                await User.findByIdAndUpdate(data.id, userData);
                break;
            }

            case "user.deleted": {

                // Delete bookings made by the user
                await Booking.deleteMany({ user: data.id });

                // Check if the user owns a hotel
                const hotel = await Hotel.findOne({ owner: data.id });

                if (hotel) {

                    // Delete all bookings for this hotel
                    await Booking.deleteMany({ hotel: hotel._id });

                    // Delete all rooms of this hotel
                    await Room.deleteMany({ hotel: hotel._id });

                    // Delete the hotel
                    await Hotel.deleteOne({ _id: hotel._id });
                }

                // Delete the user
                await User.deleteOne({ _id: data.id });

                break;
            }

            default:
                break;
        }
        res.json({ success: true, message: "Webhook recieved" });

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

export default clerkWebhooks;