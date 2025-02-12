import { Text } from "@medusajs/ui"

const MedusaCTA = () => {
  return (
    <Text className="flex flex-col gap-x-2 txt-compact-small-plus items-center">
      La Lune Curieuse 3 Rue de l'Église 21610, Chaume-et-Courchamp
      <a
        className="text-lune hover:text-neutral-300"
        href="mailto:commande@lalunecurieuse.com"
        target="_blank"
        rel="noreferrer"
      >
        commande@lalunecurieuse.com
      </a>
      {/**
     *   <a href="https://www.medusajs.com" target="_blank" rel="noreferrer">
        <Medusa fill="#9ca3af" className="fill-[#9ca3af]" />
      </a>
      &
      <a href="https://nextjs.org" target="_blank" rel="noreferrer">
        <NextJs fill="#9ca3af" />
      </a>
     */}
    </Text>
  )
}

export default MedusaCTA
