
import { designersData } from '../data/designers';

// Simulate Flask API endpoints
export const api = {
  // GET /api/listings
  getListings: async () => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      success: true,
      data: designersData,
      message: 'Listings fetched successfully'
    };
  },

  // POST /api/shortlist
  toggleShortlist: async (designerId: number, isShortlisted: boolean) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    console.log(`${isShortlisted ? 'Added to' : 'Removed from'} shortlist:`, designerId);
    
    return {
      success: true,
      data: { designerId, isShortlisted },
      message: `Designer ${isShortlisted ? 'added to' : 'removed from'} shortlist`
    };
  },

  // POST /api/report
  reportDesigner: async (designerId: number, reason: string) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    console.log('Designer reported:', designerId, 'Reason:', reason);
    
    return {
      success: true,
      data: { designerId, reason },
      message: 'Report submitted successfully'
    };
  }
};
