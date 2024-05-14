interface FloatingInput {
  error?: string
  label: string
  value: string
  onValueChange: (value: string) => void
  type?: string
  required?: boolean
}

export const FloatingInput = ({
  error,
  label = '',
  onValueChange,
  ...other
}: FloatingInput) => {
  const isError = !!error
  return (
    <div>
      <div className="relative">
        <input
          onChange={(e) => {
            if (onValueChange) onValueChange(e.target.value)
          }}
          autoComplete="new-password"
          type="text"
          id={`text-${label}`}
          className={`block px-5 pb-2 pt-2 w-full text-base bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
            isError
              ? 'border-red-500 focus:border-red-500'
              : 'ring-gray-300 focus:ring-blue-500'
          }`}
          placeholder=" "
          {...other}
        />
        <label
          htmlFor={`text-${label}`}
          className={`absolute duration-200 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-3 ${
            isError ? 'text-red-600' : 'peer-focus:text-blue-600 text-gray-500'
          }`}
        >
          {label}
        </label>
      </div>
      <p
        id="standard_error_help"
        className={`${error ? 'mt-1 ml-3' : ''} text-sm text-red-600`}
      >
        {error}
      </p>
    </div>
  )
}
