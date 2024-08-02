import React from 'react'
import { useState } from 'react';


const usaCities = {
    '': ['Undefined'],
    'Alabama': ['Birmingham', 'Montgomery', 'Mobile', 'Huntsville'],
    'Alaska': ['Anchorage', 'Fairbanks', 'Juneau'],
    'Arizona': ['Phoenix', 'Tucson', 'Mesa', 'Scottsdale'],
    'Arkansas': ['Little Rock', 'Fort Smith', 'Fayetteville'],
    'California': ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento'],
    'Colorado': ['Denver', 'Colorado Springs', 'Boulder'],
    'Connecticut': ['Bridgeport', 'New Haven', 'Hartford'],
    'Delaware': ['Wilmington', 'Dover', 'Newark'],
    'Florida': ['Miami', 'Orlando', 'Tampa', 'Jacksonville'],
    'Georgia': ['Atlanta', 'Savannah', 'Augusta'],
    'Hawaii': ['Honolulu', 'Hilo', 'Kailua'],
    'Idaho': ['Boise', 'Nampa', 'Meridian'],
    'Illinois': ['Chicago', 'Springfield', 'Peoria'],
    'Indiana': ['Indianapolis', 'Fort Wayne', 'South Bend'],
    'Iowa': ['Des Moines', 'Cedar Rapids', 'Davenport'],
    'Kansas': ['Wichita', 'Overland Park', 'Kansas City'],
    'Kentucky': ['Louisville', 'Lexington', 'Bowling Green'],
    'Louisiana': ['New Orleans', 'Baton Rouge', 'Shreveport'],
    'Maine': ['Portland', 'Bangor', 'Lewiston'],
    'Maryland': ['Baltimore', 'Annapolis', 'Rockville'],
    'Massachusetts': ['Boston', 'Cambridge', 'Springfield'],
    'Michigan': ['Detroit', 'Grand Rapids', 'Lansing'],
    'Minnesota': ['Minneapolis', 'St. Paul', 'Rochester'],
    'Mississippi': ['Jackson', 'Gulfport', 'Southaven'],
    'Missouri': ['Kansas City', 'St. Louis', 'Springfield'],
    'Montana': ['Billings', 'Missoula', 'Great Falls'],
    'Nebraska': ['Omaha', 'Lincoln', 'Bellevue'],
    'Nevada': ['Las Vegas', 'Reno', 'Henderson'],
    'New Hampshire': ['Manchester', 'Nashua', 'Concord'],
    'New Jersey': ['Newark', 'Jersey City', 'Trenton'],
    'New Mexico': ['Albuquerque', 'Santa Fe', 'Las Cruces'],
    'New York': ['New York City', 'Buffalo', 'Rochester'],
    'North Carolina': ['Charlotte', 'Raleigh', 'Greensboro'],
    'North Dakota': ['Fargo', 'Bismarck', 'Grand Forks'],
    'Ohio': ['Cleveland', 'Columbus', 'Cincinnati'],
    'Oklahoma': ['Oklahoma City', 'Tulsa', 'Norman'],
    'Oregon': ['Portland', 'Salem', 'Eugene'],
    'Pennsylvania': ['Philadelphia', 'Pittsburgh', 'Harrisburg'],
    'Rhode Island': ['Providence', 'Warwick', 'Cranston'],
    'South Carolina': ['Charleston', 'Columbia', 'Greenville'],
    'South Dakota': ['Sioux Falls', 'Rapid City', 'Aberdeen'],
    'Tennessee': ['Nashville', 'Memphis', 'Knoxville'],
    'Texas': ['Houston', 'Dallas', 'Austin', 'San Antonio'],
    'Utah': ['Salt Lake City', 'Provo', 'Orem'],
    'Vermont': ['Burlington', 'Essex', 'Rutland'],
    'Virginia': ['Richmond', 'Virginia Beach', 'Norfolk'],
    'Washington': ['Seattle', 'Spokane', 'Tacoma'],
    'West Virginia': ['Charleston', 'Huntington', 'Morgantown'],
    'Wisconsin': ['Milwaukee', 'Madison', 'Green Bay'],
    'Wyoming': ['Cheyenne', 'Casper', 'Laramie']
  };

function Home() {
    const [formData, setFormData] = useState({
        country: "",
        state: "",
        city: "",
        days: "",
        content: "",
        restaurants: ""
      });
  return (
    <div >
      <div className='flex justify-center italic hover:not-italic  text-black-500 hover:text-brown-600 bg-indigo-500 font-bold'>
      <h1>Traveling AI App</h1>
      </div>
      <div className="bg-fixed ..." style="background-image: url(https://www.pixelstalk.net/wp-content/uploads/2016/08/Free-Travel-Backgrounds-Download-HD.jpg)">
      <div className='grid grid-flow-col justify-stretch mt-12'>
        <h3>Select state</h3>
        <select className={StyleSheet.input} name="state" value={FormData.state}>
            {/* {states.map((key)=>(
                <option key={key} value={key}>{key}</option>
            ))} */}
        </select>
        <h3>Select city</h3>
        <select name='city' value={formData.city}></select>
        <button type="button">
           Generate my trip
        </button>
      </div>
      </div>
    </div>
  )
}

export default Home
