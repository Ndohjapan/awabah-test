const people = [
  { name: 'Aliko Dangote', id: '0010742121', numOfBeneficiary: '112', subscription: '9th November 2020' },
  { name: 'Aliko Dangote', id: '0010742122', numOfBeneficiary: '112', subscription: '9th November 2020' },
  { name: 'Aliko Dangote', id: '0010742123', numOfBeneficiary: '112', subscription: '9th November 2020' },
  { name: 'Aliko Dangote', id: '0010742124', numOfBeneficiary: '112', subscription: '9th November 2020' },
  { name: 'Aliko Dangote', id: '0010742125', numOfBeneficiary: '112', subscription: '9th November 2020' },
  { name: 'Aliko Dangote', id: '0010742126', numOfBeneficiary: '112', subscription: '9th November 2020' },
  
]

export default function TableBody() {
  return (
    <div className="mt-8 flex flex-col">
    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                  <a href="#" className="group inline-flex">
                    Name
                  </a>
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  <a href="#" className="group inline-flex">
                    ID
                  </a>
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  <a href="#" className="group inline-flex text-center">
                    No. of Beneficiaries
                  </a>
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  <a href="#" className="group inline-flex">
                    Subscription start date
                  </a>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {people.map((person) => (
                <tr key={person.id}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    {person.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.id}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.numOfBeneficiary}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.subscription}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}