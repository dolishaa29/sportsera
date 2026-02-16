import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import HomeHeader from "../components/HomeHeader";
import StoriesBar from "../components/StoriesBar";
import EventCard from "../components/EventCard";
import PostCard from "../components/PostCard";

export default function HomeScreen() {
  const [stories, setStories] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
   //replace fetch
    setStories([
      { id: 1, image: "https://i.pravatar.cc/150?img=1" },
      { id: 2, image: "https://i.pravatar.cc/150?img=2" },
      { id: 3, image: "https://i.pravatar.cc/150?img=3" },
    ]);

    setEvents([
      {
        id: 1,
        title: "Mini Marathon",
        date: "10 June",
        image:
          "https://images.unsplash.com/photo-1552674605-db6ffd4facb5",
      },
    ]);

    setPosts([
      {
        id: 1,
        user: "Metro City Club",
        userImage: "https://i.pravatar.cc/150?img=4",
        postImage:
          "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf",
        caption: "Great practice session today!",
      },
    ]);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <HomeHeader />
        <StoriesBar data={stories} />

        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}

        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </ScrollView>
    </View>
  );
};

