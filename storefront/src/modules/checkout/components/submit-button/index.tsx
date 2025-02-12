"use client"

import { Button as MedusaButton } from "@medusajs/ui"
import React from "react"
import { useFormStatus } from "react-dom"

export function SubmitButton({
  children,
  variant = "primary",
  className,
  "data-testid": dataTestId,
}: {
  children: React.ReactNode
  variant?:
    | "primary"
    | "secondary"
    | "tertery"
    | "danger"
    | "transparent"
    | null
  className?: string
  "data-testid"?: string
}) {
  const { pending } = useFormStatus()

  const getClassNames = () => {
    let baseClass =
      "group relative inline-flex border focus:outline-none w-full sm:w-auto rounded-full"
    let spanClass =
      "w-full inline-flex items-center justify-center self-stretch px-6 py-4 text-sm text-center font-semibold ring-1 transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1 rounded-full"

    switch (variant) {
      case "primary":
        baseClass += " border-lune"
        spanClass += " text-white bg-lune ring-lune ring-offset-lune"
        break
      case "secondary":
        baseClass += " border-lune"
        spanClass += " text-creamy bg-lune/5 hover:bg-lune ring-lune"
        break
      case "tertery":
        baseClass += " border-lune"
        spanClass += " text-lune bg-lune/5 hover:bg-lune ring-lune"
        break
      default:
        return null
    }

    return { baseClass, spanClass }
  }

  const customStyles = getClassNames()

  return variant === "danger" || variant === "transparent" ? (
    <MedusaButton
      size="large"
      className={className}
      type="submit"
      isLoading={pending}
      variant={variant}
      data-testid={dataTestId}
    >
      {children}
    </MedusaButton>
  ) : (
    <button
      type="submit"
      disabled={pending}
      className={`${customStyles?.baseClass} ${className || ""}`}
      data-testid={dataTestId}
    >
      <span className={customStyles?.spanClass}>
        {pending ? "Loading..." : children}
      </span>
    </button>
  )
}
