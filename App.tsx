import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const App: React.FC = () => {
  const ownerName: JSX.Element = (
    <>
      <Text style={styles.boldSentence}>Ekenedilichukwu Okoli</Text>
    </>
  );
  const companyOne: JSX.Element = (
    <>
      <Text style={styles.boldSentence}>Knowledge City Inc</Text>
    </>
  );

  const companyTwo: JSX.Element = (
    <>
      <Text style={styles.boldSentence}>Alpha-Drones</Text>
    </>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Hello there,</Text>
      <Text style={styles.innerHeaderText}>
        I am {ownerName}, the founder of {companyOne}, and {companyTwo} a
        Software Engineer with over half a decade years of experienceing
        creating amazing mobile and web applications using React Native and
        React js.
      </Text>
      <Text style={styles.innerHeaderText}>
        You have successfully cloned the React Native App Compomnents, and you
        are in the main branch. To use any of over 1000+ components, see the
        ReadMe file for more details.
      </Text>

      <Text style={styles.innerHeaderText}>
        Get to know more about me by viewing my protfolio website or follow me
        on my social media links below:
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 30
        }}
      >
        <Ionicons style={styles.logo} name="logo-facebook" size={20} color={"black"} />
        <Ionicons style={styles.logo} name="logo-twitter" size={20} color={"black"} />
        <Ionicons style={styles.logo} name="logo-instagram" size={20} color={"black"} />
        <Ionicons style={styles.logo} name="logo-linkedin" size={20} color={"black"} />
        <Ionicons style={styles.logo} name="logo-youtube" size={20} color={"black"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerText: {
    color: "blue",
    fontSize: 25,
    fontWeight: "900",
    paddingBottom: 20,
  },
  innerHeaderText: {
    color: "#000000",
    fontWeight: "200",
    fontSize: 18,
    textAlign: "justify",
    lineHeight: 30,
    letterSpacing: 2,
    paddingBottom: 10,
  },
  boldSentence: {
    fontWeight: "800",
  },
  logo: {
    marginRight: 20
  }
});

export default App;
