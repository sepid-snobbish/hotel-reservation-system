import { useRouter } from 'next/router';
import Link from 'next/link';

export default function RoomDetail() {
  const router = useRouter();
  const { id } = router.query;

  
  const handleReserve = () => {
    alert(`Room ${id} reserved!`);
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      <Link href="/" style={{ display: 'inline-block', marginBottom: '20px', color: '#3b82f6' }}>
        ← Back to rooms
      </Link>

      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '30px',
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>Room {id} Details</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          <div style={{ height: '400px', position: 'relative' }}>
            <img
              src={`/images/room${id}.jpg`} 
              alt={`Room ${id}`} 
              style={{ 
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px'
              }}
            />
          </div>
          
          <div>
            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Check-in Date</label>
              <input 
                type="date" 
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Check-out Date</label>
              <input 
                type="date" 
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px'
                }}
              />
            </div>
            
            <button
              onClick={handleReserve}
              style={{
                width: '100%',
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '12px',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
            >
              Reserve Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}