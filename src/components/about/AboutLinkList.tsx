import { AboutLinks } from '../../data/link'

export const AboutLinkList = () => {
  return (
    <div>
      {AboutLinks.map((aboutLink) => (
        <dl key={aboutLink.key} className="flex mt-4 text-gray">
          <dt className="font-bold text-lg w-28">{aboutLink.key}</dt>
          <dd>
            {aboutLink.url ? (
              <a href={aboutLink.url} className="cursor-pointer underline">
                {aboutLink.value}
              </a>
            ) : (
              aboutLink.value
            )}
          </dd>
        </dl>
      ))}
    </div>
  )
}
