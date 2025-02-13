import { Heading, Img, Section } from "@react-email/components";
import EmailBody from "./components/email-body";
import Layout from "./components/layout";
import { title } from "./components/style";

export default function ShippingConfirmation() {
  return (
    <Layout preview="Confirmation d'expédition">
      <Section className="w-full max-w-[565px] mb-16 px-5" align="left">
        <Img
          className="max-w-[291px]"
          src="https://res.cloudinary.com/dvdup4fx9/image/upload/v1718902365/La%20Lune%20Curieuse/Mailing/logo_long_uhz2ni.png"
        />
        <Heading className="mb-3 mt-16" style={title}>
          Votre commande a été expédiée !
        </Heading>
        <EmailBody
          paragraphs={[
            "Bonne nouvelle ! Votre commande [Numéro de commande] a été expédiée et est en route vers vous.",
            "Si vous avez des questions concernant votre livraison, n'hésitez pas à nous contacter à [Email du support client] ou [Numéro de téléphone du support client]. Nous sommes toujours heureux de vous aider !",
            "Nous espérons que vous êtes aussi excité que nous de recevoir votre achat. Merci d'avoir acheté chez Munchies !",
          ]}
          signature
        />
      </Section>
    </Layout>
  );
}
