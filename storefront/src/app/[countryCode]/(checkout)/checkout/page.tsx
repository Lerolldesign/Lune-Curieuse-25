import { Metadata } from "next"
import { notFound } from "next/navigation"

import { enrichLineItems, retrieveCart } from "@lib/data/cart"
import Wrapper from "@modules/checkout/components/payment-wrapper"
import CheckoutForm from "@modules/checkout/templates/checkout-form"
import CheckoutSummary from "@modules/checkout/templates/checkout-summary"
import { getCustomer } from "../../../../lib/data/customer"

export const metadata: Metadata = {
  title: "Checkout",
}

const fetchCart = async () => {
  const cart = await retrieveCart()
  if (!cart) {
    return notFound()
  }
  if (cart?.items?.length) {
    const enrichedItems = await enrichLineItems(
      cart?.items as any[],
      cart?.region_id!
    )
    cart.items = enrichedItems as any[]
  }

  return cart
}

export default async function Checkout() {
  const cart = await fetchCart()
  const customer = await getCustomer()

  return (
    <div className="grid grid-cols-1 small:grid-cols-[1fr_416px] content-container gap-x-40 py-12">
      <Wrapper cart={cart as any}>
        <CheckoutForm cart={cart as any} customer={customer} />
      </Wrapper>
      <CheckoutSummary cart={cart as any} />
    </div>
  )
}
