/* eslint-disable react/prop-types */
const PropertyDescription = ({ data }) => {
  const description = `
  Located in Srinagar, 9 km from Shankaracharya Mandir, Hotel curio's All seasons provides accommodation with a garden, free private parking, a shared lounge and a restaurant. This 3-star hotel offers a shared kitchen, room service and free WiFi. The property is non-smoking and is set 8.3 km from Hazratbal Mosque.

  All units in the hotel are fitted with a flat-screen TV. With a private bathroom equipped with a shower and free toiletries, rooms at Hotel curio's All seasons also offer a city view.
  
  The accommodation offers a continental or vegetarian breakfast.
  
  Hotel curio's All seasons offers a children's playground. The area is popular for cycling, and car hire is available at the hotel.
  
  Speaking English, Hindi, Marathi and Punjabi at the reception, staff will be happy to provide guests with practical guidance on the area.
  
  Pari Mahal is 11 km from Hotel curio's All seasons, while Roza Bal Shrine is 2.4 km away. Srinagar Airport is 21 km from the property.
  
  Groups particularly like the location — they rated it 8.6 for stays with multiple people.
  `;

  const refineDescription = description.split("\n").map((item, index) => (
    <p key={index} className="mt-2 text-gray-700">
      {item}
    </p>
  ));
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Description</h2>
        <p className="text-gray-700">{data?.description}</p>
        {refineDescription}
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Most Popular Facilities</h2>
        <ul className="list-disc list-inside text-gray-700">
          {data?.amenities?.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>
      <hr className="border-t border-gray-300 mb-8" />
    </>
  );
};

export default PropertyDescription;
