import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://hits.dwyl.com/BymBu/map-of-Ziryansk.json');
    
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    
    const data = await res.json();
    const count = Number(data.message) || 0;
    
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Counter API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch counter' },
      { status: 500 }
    );
  }
}