import Image from "next/image"
import { PHOTOGRAPHY_COLLECTION } from "@/lib/constants"

export const metadata = { title: "Photography" }

export default function PhotographyPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Photography</h1>
      <p className="text-muted-foreground mb-10">
        A small selection of shots. All images are local for fast loads.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PHOTOGRAPHY_COLLECTION.map(photo => (
          <figure key={photo.slug} className="rounded-lg overflow-hidden border">
            <Image
              src={photo.src}
              alt={photo.title}
              width={photo.width}
              height={photo.height}
              className="h-64 w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority={false}
            />
            <figcaption className="p-3">
              <div className="font-medium">{photo.title}</div>
              <div className="text-sm text-muted-foreground">
                {photo.tags.join(" · ")}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </main>
  )
}
