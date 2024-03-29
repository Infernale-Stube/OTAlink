import React from "react";
import { Linking, Platform, Text, View, Image, useColorScheme } from "react-native";

import styles from "../../styles/screens/homeStyles";
import { lightStyles, darkStyles } from "../../styles/appStyles";

const icon = require("../../assets/icon.png");

export default function Home() {
  const colorScheme = useColorScheme?.() || "light";
  const appStyles = colorScheme === "light" ? lightStyles : darkStyles;
  
  const emailBody = () =>
  `Sehr geehrtes OTAlink-Team, ich habe folgendes Anliegen (bitte ankreuzen):

    [  ] Datenschutz-Anfrage
    [  ] Fehlermeldung (z.B. App Abstürze)
    [  ] Inhaltliche Korrektur
    [  ] OP-Ablauf einreichen
    [  ] Sonstiges

  Hardware und Software Informationen:
  App Version: ${require("../../app.json").expo.version}
  Betriebssystem: ${Platform.OS} Version: ${Platform.Version}
  -----
  
`
  
  const handleEmailPress = () => {
    const subject = "OTAlink Anfrage";
    const recipient = "otalink@infernalestube.de";
    const body = emailBody();
    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;
    Linking.openURL(mailtoUrl);
  };

  return (
    <View style={[styles.container, appStyles.background]}>
      <View>
        <Text style={[styles.appName, appStyles.text]}>OTAlink</Text>
      </View>
      <View>
        <Image
          source={icon}
          style={{ width: 120, height: 120, borderRadius: 18, marginTop: 50 }}
        />
      </View>
      <View>
        <Text style={[styles.description, appStyles.text]}>
          Herzlich Willkommen bei OTAlink!{"\n"}
          {"\n"}Die mobile Datenbank für Operationsabläufe.{"\n"}
          {"\n"}Bitte melden Sie etwaige Fehler, Unstimmigkeiten oder
          Korrekturen unter der nachfolgenden E-Mail Adresse:
          <Text
            style={[styles.descriptionLink, appStyles.text]}
            onPress={handleEmailPress}
          >
            {"\n"}otalink@infernalestube.de
          </Text>
        </Text>
      </View>
    </View>
  );
}
