import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import BGScreen from './BackgroundScreen';
import { AntDesign } from '@expo/vector-icons';
import { primary_color } from './styles';

export default function FAQ() {
  return (
    <BGScreen contentStyle={{ backgroundColor: 'lightgrey' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', padding: 8, marginTop: 10, marginBottom: 10 }}>
        Frequently Asked Questions
      </Text>

      <Accordion
        title="How do I join the Black Family Wealth (BFW) community?"
        description="Joining the BFW community is invitation only.  If you’re interested in joining the community please visit our website and submit your information to be added to our waiting list.  Once an opening becomes available you will receive an invitation to join."
      />
      <Accordion
        title="Why is there a waiting list?"
        description="We manage our community using a waiting list to ensure everyone has great experience and can benefit from all the services  provided via the Black Family Wealth network."
      />
      <Accordion
        title="Who is accepted to participate in BFW?"
        description="Anyone who is referred by an existing member in good standing can request membership in BFW."
      />
      <Accordion
        title="How much does it cost to be a member of BFW?"
        description="Membership is a recurring monthly fee of $5.99 per month."
      />
      <Accordion
        title="How is my membership fee paid?"
        description="Your recurring membership fee is paid via PayPal.  A requirement to join the community requires having a PayPal account."
      />
      <Accordion
        title="Why do I need a PayPal account?"
        description="PayPal is the official payment partner for BFW.  It is used for paying your monthly membership dues, as well as for sending and receiving Gifts. "
      />
    </BGScreen>
  );
}

function Accordion({ title, description, defaultIsOpen }) {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  const iconName = (isOpen) ? 'caretup' : 'caretdown';
  const titleBGColor = (isOpen) ? primary_color : 'white';
  const titleFontColor = (isOpen) ? 'white' : 'black';
  return (
    <Pressable style={{ flexDirection: 'column', margin: 8 }} onPress={() => setIsOpen(!isOpen)}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: titleBGColor, padding: 10  }}>
        <Text style={{ fontSize: 16, flex: 1, paddingRight: 6, color: titleFontColor }}>{title}</Text>
        <AntDesign name={iconName} size={14} color="black" /> 
      </View>
      <View style={[{ display: 'none' }, isOpen && { display: 'flex' }]}>
        <Text style={{ padding: 15 }}>{description}</Text>
      </View>
    </Pressable>
  );
}
