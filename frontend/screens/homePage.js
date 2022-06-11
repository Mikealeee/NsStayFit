import React from 'react';
import {useTailwind} from 'tailwind-rn';
import { Text, Card } from '@ui-kitten/components';
import { View } from 'react-native';
import { StyleSheet } from 'react-native'

export default HomePage = () => {

    const tailwind = useTailwind();
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    return (
        <View style={styles.layoutStyles}>
            <View>
                <Text style={styles.title}>Welcome Back!</Text>
            </View>

            <View style={styles.circle}>
                <Text style={styles.score}>100</Text>
                <Text style={styles.ipptScoreHeader}>IPPT Score</Text>
            </View>
            
            <View>
                <Text style={styles.awardIncentives}>Award: Gold{'\n'}Expected Incentives: $500</Text>
            </View>

            <View>
                <Card style={styles.tab}>
                    <Text category='h5'>“All progress takes place outside the comfort zone.”- Michal Joan Bobak</Text>
                </Card>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    layoutStyles: {
        flexGrow: 1,
        alignItems: 'center',
    },

    title: {
      fontSize: 45,
      fontWeight: 'bold',
      marginTop: 50,
      textAlign: 'center',
    },

    circle: {
        width: 250,
        height: 250,
        borderRadius: 125,
        borderWidth: 2,
        borderColor: 'black',
        borderStyle: 'solid',
        justifyContent: 'center',
        backgroundColor: "#add8e6",
        marginTop: 30,
    },

    score: {
        fontSize: 100,
        textAlign: 'center'
    },

    ipptScoreHeader: {
        fontSize: 20,
        textAlign: 'center'
    },

    awardIncentives: {
        marginTop: 10,
        marginBottom: 30,
        fontSize: 25,
        textAlign: 'center'
    },

    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        backgroundColor: "transparent",
    },
  })
