import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const HomePage = ({ rooms }) => {
  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 20px' }}>
      {/* Gradient Header (unchanged) */}
      <div style={{
        background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
        padding: '30px',
        borderRadius: '16px',
        marginBottom: '40px',
        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: '800', 
          marginBottom: '12px',
          letterSpacing: '1px'
        }}>
          Discover Your Perfect Stay
        </h1>
        <p style={{ 
          fontSize: '1.1rem',
          opacity: '0.9',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          Luxury rooms tailored for your comfort and relaxation
        </p>
      </div>

      {/* Room Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
        gap: '30px'
      }}>
        {rooms.map((room) => {
          const [isHovered, setIsHovered] = useState(false);
          
          return (
            <div 
              key={room.id}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ 
                border: '1px solid rgba(226, 232, 240, 0.6)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: isHovered ? '0 10px 25px rgba(0,0,0,0.12)' : '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                background: 'white',
                transform: isHovered ? 'translateY(-5px)' : 'none'
              }}
            >
              <div style={{ 
                position: 'relative', 
                height: '220px',
                overflow: 'hidden'
              }}>
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  style={{ 
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    transform: isHovered ? 'scale(1.05)' : 'none'
                  }}
                />
                {/* Price Tag */}
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontWeight: 'bold',
                  color: '#3b82f6',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  ${room.pricePerNight.toLocaleString()}
                  <span style={{ fontSize: '0.8rem', marginLeft: '4px' }}>/night</span>
                </div>
              </div>
              
              <div style={{ padding: '24px' }}>
                <h2 style={{ 
                  fontSize: '1.4rem', 
                  fontWeight: '700', 
                  marginBottom: '12px',
                  color: '#1e293b'
                }}>
                  {room.title}
                </h2>
                
                <p style={{ 
                  color: '#64748b', 
                  marginBottom: '20px',
                  lineHeight: '1.5'
                }}>
                  {room.description}
                </p>
                
                <Link 
                  href={`/items/${room.id}`}
                  style={{
                    display: 'inline-block',
                    width: '100%',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    padding: '12px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    textAlign: 'center',
                    fontWeight: '600',
                    transition: 'all 0.2s ease',
                    ...(isHovered && {
                      backgroundColor: '#2563eb',
                      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                    })
                  }}
                >
                  View Details & Book
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Keep your existing getStaticProps
export async function getStaticProps() {
  const rooms = [
    {
      id: 1,
      title: "Oceanview Luxury Suite",
      description: "Wake up to breathtaking sea views with floor-to-ceiling windows and a private balcony overlooking the waves.",
      pricePerNight: 500000,
      image: "/images/room1.jpg"
    },
    {
      id: 2,
      title: "Mountainview Deluxe Room",
      description: "Cozy retreat with panoramic mountain vistas, featuring a fireplace and premium bedding for ultimate comfort.",
      pricePerNight: 400000,
      image: "/images/room2.jpg"
    },
    {
      id: 3,
      title: "Executive City View Room",
      description: "Sophisticated urban escape with skyline views, work desk, and premium amenities for business travelers.",
      pricePerNight: 300000,
      image: "/images/room3.jpg"
    }
  ];
  return { props: { rooms } };
}

export default HomePage;

