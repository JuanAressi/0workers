import React, { useState } from 'react';

interface Country {
    name: string;
    selected: boolean;
}

const countriesData: Country[] = [
    { name: 'India', selected: false },
    { name: 'USA', selected: false },
    { name: 'France', selected: false },
];


const CountrySelection: React.FC = () => {
    const [countries, setCountries] = useState<Country[]>(countriesData);
    const [selectAll, setSelectAll] = useState<boolean>(false);

    const handleCheckboxChange = (index: number) => {
        const updatedCountries = [...countries];
        updatedCountries[index].selected = !updatedCountries[index].selected;
        setCountries(updatedCountries);

        if (selectAll) {
            setSelectAll(false);
        } else {
            const allSelected = updatedCountries.every(country => country.selected);

            if (allSelected) {
                setSelectAll(true);
            }
        }
    };

    const handleSelectAllChange = () => {
        const updatedCountries = countries.map(country => ({
            ...country,
            selected: !selectAll,
        }));

        setCountries(updatedCountries);
        setSelectAll(!selectAll);
    };

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAllChange}
                />
                Select All
            </label>

            {countries.map((country, index) => (
                <div key={index}>
                    <label>
                        <input
                            type="checkbox"
                            checked={country.selected}
                            onChange={() => handleCheckboxChange(index)}
                        />
                        {country.name}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default CountrySelection;
