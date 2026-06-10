'use client'
import PetCard from '@/shared/PetCard';
import { Label, SearchField, Spinner, Select, ListBox, Button } from '@heroui/react';
import React, { useEffect, useState } from 'react';

const AllPets = () => {

  const [allPets, setAllPets] = useState([]);
  const [search, setSearch] = useState("");
  const [species, setSpecies] = useState('')


  const [loading, setLoading] = useState(true);

  const fetchAllPets = async () => {

    let url = `${process.env.NEXT_PUBLIC_SERVER_URL}/pets?`;
    if (search) url += `search=${search}&`;
    if (species) url += `species=${species}`;

    const res = await fetch(url);

    const data = await res.json();
    setLoading(false)
    setAllPets(data);


  }
  useEffect(() => {
    fetchAllPets();
  }, [search, species]);

  return (
    <div className=' w-11/12 mx-auto m-5 bg-amber-50/50 pb-10 px-10'>
      <h2 className='font-bold text-3xl text-center text-pink-600 my-5'>All Pets</h2>

      <div className=' w-full my-5 flex flex-col md:flex-row gap-5'>
        <SearchField

          onChange={(e) => setSearch(e)}
        >
          <Label className='text-pink-600'>Search</Label>
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input className="w-[280px]" placeholder="Search by pet name..." />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>

        <Select className="w-[256px]" placeholder="Select one"
          onChange={(value) => setSpecies(value)}
        >
          <Label className='text-pink-600'>Search By Species</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="Dog" name="species" textValue="Dog">
                Dog
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="Cat" name="species" textValue="Cat">
                Cat
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="other" name="species" textValue="Other">
                Other
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
        {(search || species) &&
          <Button
            onClick={() => { setSearch(''); setSpecies(''); }}
            className='text-pink-600 bg-white md:mt-6'
          >
            Clear
          </Button>
        }
      </div>

      {
        loading && <div className="flex justify-center  items-center gap-4">
          <Spinner />
        </div>}


      {!loading && allPets.length === 0 &&
        <p className='text-center text-pink-500 my-10'>
          No pets available
        </p>
      }

      {
        !loading && allPets.length !== 0 &&
        <div className='grid grid-cols-1 md:grid-cols-3  gap-5 '>
          {
            allPets.map(pet => {
              return <PetCard key={pet._id} pet={pet}></PetCard>
            })
          }
        </div>

      }


    </div >
  );
};

export default AllPets;