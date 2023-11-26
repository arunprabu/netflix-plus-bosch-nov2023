import { Timeline, sortEventList } from "@progress/kendo-react-layout";
import axios from "axios";
import { ChangeEvent, useEffect, useMemo, useState } from "react";

interface TimelineEventProps {
  description: string;
  date: Date;
  title: string;
  subtitle?: string;
  images?: { src: string; alt?: string }[];
  actions?: { text: string; url: string }[];
}

const TimelinePage = () => {
  const [isUpdated, setIsUpdated] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [combinedData, setCombinedData] = useState<TimelineEventProps[]>([]);

  // TODO: complete this and push into github
  useEffect(() => {
    const fetchDataFromMultipleDataSources = async () => {
      try {
        setTimeout(() => {
          // Making api calls to different data sources
          // const dataOf2007 = await axios.get("/api/timeline/2007");
          // const dataOf2008 = await axios.get("/api/timeline/2008");
          // const dataOf2009 = await axios.get("/api/timeline/2009");
          // Combine data from difference datasources
          // let combinedData = [
          //   ...dataOf2007.data,
          //   dataOf2008.data,
          //   dataOf2009.data,
          // ];
          setCombinedData([
            {
              description:
                "Barcelona is an excellent place to discover world-class arts and culture. Bullfighting was officially banned several years ago, but the city remains rich with festivals and events. The sights in Barcelona are second to none. Don’t miss the architectural wonder, Casa Mila—otherwise known as La Pedrera. It’s a modernist apartment building that looks like something out of an expressionist painting. Make your way up to the roof for more architectural surprises. And if you like Casa Mila, you’ll want to see another one of Antoni Gaudi’s architectural masterpieces, Casa Batllo, which is located at the center of Barcelona. Tenerife, one of the nearby Canary Islands, is the perfect escape once you’ve had your fill of the city. In Los Gigantes, life revolves around the marina.",
              date: new Date(2008, 4, 25),
              title: "Barcelona \u0026 Tenerife",
              subtitle: "May 25, 2008",
              actions: [
                {
                  text: "More info about Barcelona",
                  url: "https://en.wikipedia.org/wiki/Barcelona",
                },
              ],
            },
            {
              description:
                "Touring the East Coast of the United States provides a massive range of entertainment and exploration. To take things in a somewhat chronological order, best to begin your trip in the north, checking out Boston’s Freedom Trail, Fenway Park, the Statue of Liberty, and Niagara Falls. Bring your raincoat to Niagara Falls, which straddles the boarder between Canada and the United States—the majestic sight might have you feeling misty in every sense of the word.",
              date: new Date(2007, 1, 27),
              title: "United States East Coast Tour 1",
              subtitle: "Feb 27, 2007",
              actions: [
                {
                  text: "More info about New York City",
                  url: "https://en.wikipedia.org/wiki/New_York_City",
                },
              ],
            },
            {
              description:
                "Home of the oldest-known human structures in the world, the Maltese archipelago is best described as an open-air museum. Malta, the biggest of the seven Mediterranean islands, is the cultural center of the three largest—only three islands that are fully inhabited.  If you’re into heavy metal—swords, armor and other medieval weaponry—you’ll love the Grandmaster’s Palace.",
              date: new Date(2008, 5, 15),
              subtitle: "Jun 15, 2008",
              title: "Malta, a Country of Knights",
              actions: [
                {
                  text: "More info about Malta",
                  url: "https://en.wikipedia.org/wiki/Malta",
                },
              ],
            },
            {
              description:
                "The Italian Republic is a history lover’s paradise with thousands of museums, churches and archaeological sites dating back to Roman and Greek times. Visitors will also find a hub for fashion and culture unlike anywhere else in the world. Explore Ancient history in Rome at the Colosseum and Rome’s Ruins.",
              date: new Date(2008, 6, 6),
              subtitle: "Jul 6, 2008",
              title: "Wonders of Italy",
              actions: [
                {
                  text: "More info about Rome",
                  url: "https://en.wikipedia.org/wiki/Rome",
                },
              ],
            },
            {
              description:
                "Tour the best of Western Europe and take in the sights of Munich, Frankfurt, Meinz, Bruxel, Amsterdam, and Vienna along the way. Discover the amazing world of plants at Frankfurt Palmengarten, the botanical gardens in Frankfurt.",
              date: new Date(2009, 7, 11),
              subtitle: "Aug 11, 2009",
              title: "The Best of Western Europe",
              actions: [
                {
                  text: "More info about Munich",
                  url: "https://en.wikipedia.org/wiki/Munich",
                },
              ],
            },
          ]);
          setIsUpdated(true);
        }, 2000);
        
        // console.log('Combined Data');
        // setTimelineEvents(combinedData);
      } catch (error) {}
    };
    fetchDataFromMultipleDataSources();
  }, []);

  const handleDataSourceChange = () => {};

  const timelineEvents = useMemo(() => {
    console.log("Inside useMemo");
    return combinedData;
  }, [combinedData]);

  const filteredEvents = timelineEvents.filter((event: any) => {
    return event.title.toLowerCase().includes(filterText.toLowerCase());
  });

  const sortedEvents = useMemo(() => {
    console.log("Inside useMemo");
    let filted = sortEventList(filteredEvents);
    return filted;
  }, [filteredEvents]);

  if (isUpdated) {

    console.log("Re-Rendering");
    console.log(sortedEvents);
    return (
      <div>
        <h1>Horizontal Timeline</h1>
        {/* <select onChange={handleDataSourceChange}>
        <option>Data From 2007</option>
        <option>Data From 2008</option>
        <option>Data From 2009</option>
      </select> */}

        <input
          type="text"
          placeholder="Filter by Title"
          value={filterText}
          onChange={(event) => setFilterText(event.target.value)}
        />

        <Timeline
          events={sortedEvents}
          horizontal={true}
          alterMode={true}
          className="redText"
        />
      </div>
    );
  } else {
    return <p>Please wait...</p>;
  }

  
};

export default TimelinePage;
