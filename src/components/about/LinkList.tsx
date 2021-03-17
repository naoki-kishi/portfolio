import { AboutLinks } from '../../data/link'

export const AboutLinkList = () => {
  return (
    <div className="flex flex-col justify-center mb-8 ml-32">
      {AboutLinks.map((aboutLink) => (
        <dl key={aboutLink.key} className="flex mt-4 text-gray">
          <dt className="w-28 text-lg font-bold">{aboutLink.key}</dt>
          <dd>
            {aboutLink.url ? (
              <a href={aboutLink.url} className="underline cursor-pointer">
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