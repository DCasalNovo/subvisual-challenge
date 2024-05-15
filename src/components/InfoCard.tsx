import { capitalizeNames } from '../utils/utils'

interface InfoCardProps {
  imagem: string
  context?: string
  text: string
  'data-testid'?: string
  onclick: () => void
}

export const InfoCard = ({
  imagem,
  context,
  text,
  'data-testid': dataTestid,
  onclick,
}: InfoCardProps) => {
  return (
    <div
      className="w-56 flex flex-col items-center shadow-md bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
      onClick={onclick}
    >
      <img
        className="rounded-t-lg w-36 h-36"
        src={imagem}
        alt=""
        data-testid={dataTestid ? dataTestid + '-image' : undefined}
      />
      <div className="w-full py-5 flex flex-col items-center">
        {context ? (
          <p className="text-lg font-medium text-gray-600 dark:text-white">
            {capitalizeNames(context)}
          </p>
        ) : null}
        <p
          data-testid={dataTestid ? dataTestid + '-desc' : undefined}
          className="text-lg font-medium text-gray-600 dark:text-white"
        >
          {capitalizeNames(text)}
        </p>
      </div>
    </div>
  )
}
