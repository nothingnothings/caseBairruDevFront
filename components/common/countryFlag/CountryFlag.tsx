import Flag from 'react-world-flags';

const renderCountryFlag = ({ countryCode }: { countryCode: string }) => {
  return (
    <Flag
      code={countryCode}
      style={{ width: 40,  borderRadius: 2, alignSelf: 'center'  }}
    />
  );
};

export default renderCountryFlag;
