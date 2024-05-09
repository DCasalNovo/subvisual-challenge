interface FloatingInput {
  error: string | undefined
  label: string
  value: string
  onValueChange: (value: string) => void
  required: boolean
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
      <div className="relative z-0">
        <input
          {...other}
          onChange={(e) => {
            if (onValueChange) onValueChange(e.target.value)
          }}
          type="text"
          id="standard_error"
          aria-describedby="standard_error_help"
          className={`block py-2.5 duration-300 px-2 w-full text-gray-900 bg-transparent border-0 border-b-2 appearance-none outline-none focus:outline-none focus:ring-0 peer ${
            isError
              ? 'border-red-500 focus:border-red-500'
              : 'ring-gray-300 focus:ring-blue-500'
          }`}
          placeholder=" "
        />
        <label
          htmlFor="standard_error"
          className={`absolute px-2 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto ${
            isError ? 'text-red-600' : 'text-black'
          }`}
        >
          {label}
        </label>
      </div>
      <p id="standard_error_help" className="mt-2 text-xs text-red-600">
        {error}
      </p>
    </div>
  )
}
