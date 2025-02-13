import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { ContainerRegistrationKeys, Modules } from "@medusajs/framework/utils";
import ShippingConfirmation from "../../_templates/shipping-confirmation";
import { sendEmail } from "../../lib";

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const { id } = req.params;

  const orderService = req.scope.resolve(Modules.ORDER);

  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY);

  const order = await orderService.retrieveOrder(id);

  if (order)
    try {
      await sendEmail({
        to: order.email,
        subject: "Votre commande est en route !",
        react: <ShippingConfirmation />,
      });

      res.json({ message: "Email sent!" });
    } catch (e) {
      res.json({ message: "Email failed" });
    }
}
