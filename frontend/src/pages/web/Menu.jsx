// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Row, Col, Spin, Alert } from "antd";
// import MenuCard from "../components/MenuCard";
// // import { api } from "../services/api";

// const Menu = () => {
//   const { id } = useParams();
//   const [menu, setMenu] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         // const response = await api.get(`/restaurants/${id}/menu`);
//         setMenu("---");
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMenu();
//   }, [id]);

//   if (loading) return <Spin size="large" />;
//   if (error)
//     return (
//       <Alert message="Error" description="Failed to fetch menu." type="error" />
//     );

//   return (
//     <div className="menu">
//       <Row gutter={16}>
//         {menu &&
//           menu.menus.map((menuItem) => (
//             <Col span={8} key={menuItem.id}>
//               <MenuCard
//                 name={menuItem.name}
//                 description={menuItem.description}
//                 price={menuItem.price}
//                 imageUrl={menuItem.imageUrl}
//               />
//             </Col>
//           ))}
//       </Row>
//     </div>
//   );
// };

// export default Menu;
