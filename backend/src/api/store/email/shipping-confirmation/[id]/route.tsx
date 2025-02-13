import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { Modules } from "@medusajs/framework/utils";
import ShippingConfirmation from "../../_templates/shipping-confirmation";
import { sendEmail } from "../../lib";

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Order ID is required" });
  }

  const orderService = req.scope.resolve(Modules.ORDER);

  try {
    const order = await orderService.retrieveOrder(id);

    if (order) {
      await sendEmail({
        to: order.email,
        subject: "Votre commande est en route !",
        react: <ShippingConfirmation />,
      });

      return res.status(200).json({ message: "Email sent!" });
    } else {
      return res.status(404).json({ message: "Order not found" });
    }
  } catch (e) {
    console.error("Error retrieving order:", e);
    return res.status(500).json({ message: "Internal server error" });
  }
}
