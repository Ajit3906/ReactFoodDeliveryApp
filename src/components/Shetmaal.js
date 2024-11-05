// import { useState } from "react";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
// import { Card } from "./components/ui/card";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
// import { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar";
// import { Badge } from "./components/ui/badge";

// const Shetmaal = () => {
//   const [activeTab, setActiveTab] = useState("home");
//   const [selectedCrop, setSelectedCrop] = useState("wheat");

//   const priceData = [
//     {
//       location: "Mumbai District",
//       cropName: "Wheat",
//       avgPrice: "₹2,500/quintal",
//       minPrice: "₹2,300/quintal",
//       maxPrice: "₹2,700/quintal",
//     },
//     {
//       location: "Pune District",
//       cropName: "Wheat",
//       avgPrice: "₹2,450/quintal",
//       minPrice: "₹2,250/quintal",
//       maxPrice: "₹2,650/quintal",
//     },
//     {
//       location: "Nashik District",
//       cropName: "Wheat",
//       avgPrice: "₹2,550/quintal",
//       minPrice: "₹2,400/quintal",
//       maxPrice: "₹2,800/quintal",
//     },
//   ];

//   return (
//     <div className="max-w-md mx-auto min-h-screen bg-white shadow-lg">
//       <div className="h-[calc(100vh-64px)] overflow-y-auto">
//         <Tabs value={activeTab} onValueChange={setActiveTab}>
//           <TabsContent value="profile" className="p-4">
//             <div className="flex flex-col items-center space-y-4">
//               <Avatar className="w-24 h-24">
//                 <AvatarImage
//                   src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=96&h=96"
//                   alt="Profile"
//                 />
//                 <AvatarFallback>JD</AvatarFallback>
//               </Avatar>
//               <h2 className="text-xl font-semibold">John Doe</h2>
//               <div className="w-full">
//                 <h3 className="text-lg font-medium mb-2">My Crops</h3>
//                 <div className="flex flex-wrap gap-2">
//                   <Badge variant="secondary">Wheat</Badge>
//                   <Badge variant="secondary">Rice</Badge>
//                   <Badge variant="secondary">Corn</Badge>
//                 </div>
//               </div>
//             </div>
//           </TabsContent>

//           <TabsContent value="home" className="p-4">
//             <h1 className="text-2xl font-bold text-center mb-4">Shetmaal</h1>
//             <Select value={selectedCrop} onValueChange={setSelectedCrop}>
//               <SelectTrigger className="w-full mb-4">
//                 <SelectValue placeholder="Select crop" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="wheat">Wheat</SelectItem>
//                 <SelectItem value="rice">Rice</SelectItem>
//                 <SelectItem value="corn">Corn</SelectItem>
//               </SelectContent>
//             </Select>
//             <div className="space-y-4">
//               {priceData.map((item, index) => (
//                 <Card key={index} className="p-4">
//                   <div className="flex justify-between items-center mb-2">
//                     <h3 className="font-semibold">{item.location}</h3>
//                     <span className="text-sm text-green-600">{item.cropName}</span>
//                   </div>
//                   <div className="space-y-2">
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Average Price:</span>
//                       <span className="font-medium">{item.avgPrice}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Min Price:</span>
//                       <span className="text-red-600">{item.minPrice}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Max Price:</span>
//                       <span className="text-green-600">{item.maxPrice}</span>
//                     </div>
//                   </div>
//                 </Card>
//               ))}
//             </div>
//           </TabsContent>

//           <TabsContent value="ads" className="p-4">
//             <div className="space-y-4">
//               <Card className="bg-yellow-50 p-4">
//                 <h3 className="font-semibold text-lg mb-2">Premium Fertilizers</h3>
//                 <p className="text-sm text-gray-600">Get 20% off on all organic fertilizers!</p>
//               </Card>
//               <Card className="bg-blue-50 p-4">
//                 <h3 className="font-semibold text-lg mb-2">Modern Farming Equipment</h3>
//                 <p className="text-sm text-gray-600">Lease farming equipment at lowest rates</p>
//               </Card>
//               <Card className="bg-green-50 p-4">
//                 <h3 className="font-semibold text-lg mb-2">Seeds Sale</h3>
//                 <p className="text-sm text-gray-600">High-quality seeds for better yield</p>
//               </Card>
//             </div>
//           </TabsContent>

//           <TabsList className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-3 max-w-md mx-auto">
//             <TabsTrigger value="profile" className="flex flex-col items-center">
//               <i className="bi bi-person text-xl"></i>
//               <span className="text-xs">Profile</span>
//             </TabsTrigger>
//             <TabsTrigger value="home" className="flex flex-col items-center">
//               <i className="bi bi-house text-xl"></i>
//               <span className="text-xs">Home</span>
//             </TabsTrigger>
//             <TabsTrigger value="ads" className="flex flex-col items-center">
//               <i className="bi bi-megaphone text-xl"></i>
//               <span className="text-xs">Ads</span>
//             </TabsTrigger>
//           </TabsList>
//         </Tabs>
//       </div>
//     </div>
//   );
// }

// export default Shetmaal;