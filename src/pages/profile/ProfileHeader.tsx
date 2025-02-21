import React from "react";
import { Flex, Text } from "@aws-amplify/ui-react";

interface ProfileHeaderProps {
  name?: string;
  email?: string;
  imageSrc?: string;
}

const ProfileHeader = (props: ProfileHeaderProps) => {
  console.log(props);
  return (
    <>
      <Flex
        direction={{ base: "column", large: "row" }}
        alignItems="flex-start"
      >
        <div className="profile-header-image">
          <img alt="avatar" src={"https://www.bing.com/images/search?view=detailV2&ccid=Ep6pMC88&id=89389A41D9EBDC542691C0754A7448520627DD03&thid=OIP.Ep6pMC88WamXfF_7lNlxcAAAAA&mediaurl=https%3a%2f%2fakamai.sscdn.co%2fuploadfile%2fletras%2ffotos%2f9%2fc%2f8%2f7%2f9c87f62b0a738498618e8aef2e35ed54.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.129ea9302f3c59a9977c5ffb94d97170%3frik%3dA90nBlJIdEp1wA%26pid%3dImgRaw%26r%3d0&exph=315&expw=474&q=allen+iverson+perfil&simid=608003478477694902&FORM=IRPRST&ck=17FFF4806C4CB3D5850D1B4D1F323AB0&selectedIndex=13&itb=0"}></img>
        </div>
        <div className="profile-header-text">
          <Text variation="primary" fontWeight={600} fontSize="18px">
            Clark Mathews
          </Text>
          <Text variation="tertiary">clarkmathews@gmail.com</Text>
        </div>
      </Flex>
    </>
  );
};

export default ProfileHeader;
