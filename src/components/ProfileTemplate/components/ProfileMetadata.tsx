import React from 'react';

import {Box, Text} from '@components';

type Props = {
  followersCount: string;
  followingCount: string;
  publicationCount: string;
};

export function ProfileMetadata({
  followersCount,
  followingCount,
  publicationCount,
}: Props) {
  const items: ItemType[] = [
    {label: 'Posts', value: publicationCount},
    {label: 'Followers', value: followersCount},
    {label: 'Following', value: followingCount},
  ];

  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      mt="s24"
      columnGap="s32">
      {items.map(item => (
        <Item {...item} key={item.label} />
      ))}
    </Box>
  );
}

type ItemType = {
  value: string;
  label: string;
};
function Item({value, label}: ItemType) {
  return (
    <Box alignItems="center">
      <Text preset="headingSmall">{value}</Text>
      <Text preset="paragraphSmall">{label}</Text>
    </Box>
  );
}
