import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

type OrderDetailsProps = {
  order: HttpTypes.StoreOrder
  showStatus?: boolean
}

const OrderDetails = ({ order, showStatus }: OrderDetailsProps) => {
  const formatStatus = (str: string) => {
    const formatted = str.split("_").join(" ")

    return formatted.slice(0, 1).toUpperCase() + formatted.slice(1)
  }

  return (
    <div>
      <Text>
        Nous avons envoyé les détails de la confirmation de commande à
        <span
          className="text-ui-fg-medium-plus font-semibold pl-3"
          data-testid="order-email"
        >
          {order.email}
        </span>
        .
      </Text>
      <Text className="py-2">
        Veuillez consulter vos spams si vous ne recevez pas l'email de
        confirmation. Vous pouvez nous contacter à{" "}
        <a className="font-semibold" href="mailto:commande@lalunecurieuse.com">
          commande@lalunecurieuse.com
        </a>
        .
      </Text>

      <Text className="mt-2">
        Date d´achat:{" "}
        <span data-testid="order-date">
          {new Date(order.created_at).toDateString()}
        </span>
      </Text>
      <Text className="mt-2 text-ui-fg-interactive">
        Numéro de commande:{" "}
        <span data-testid="order-id">{order.display_id}</span>
      </Text>

      <div className="flex items-center text-compact-small gap-x-4 mt-4">
        {showStatus && (
          <>
            <Text>
              Statut de la commande :{" "}
              <span className="text-ui-fg-subtle " data-testid="order-status">
                {/* TODO: Check where the statuses should come from */}
                {/* {formatStatus(order.fulfillment_status)} */}
              </span>
            </Text>
            <Text>
              Statut de paiement:{" "}
              <span
                className="text-ui-fg-subtle "
                data-testid="order-payment-status"
              >
                {/* {formatStatus(order.payment_status)} */}
              </span>
            </Text>
          </>
        )}
      </div>
    </div>
  )
}

export default OrderDetails
