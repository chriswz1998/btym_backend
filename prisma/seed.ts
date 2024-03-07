import { PrismaClient } from '@prisma/client'
import { resouce } from '../lib/seed_resouce'

const prisma = new PrismaClient()

async function main() {
  for (const data of resouce) {
    const subSectionLinks = await prisma.subSectionLinks.create({
      data
    })
    console.log(
      `Created subSectionLinks with id: ${subSectionLinks.subSectionLinks_id}`
    )
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
