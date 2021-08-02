import React from "react";
import { RefreshControl, ScrollView, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

const Details: React.FC<{}> = function () {
    const [refreshing, setRefreshing] = React.useState(false);
    const [items, setItems] = React.useState([1, 2, 3, 4, 5, 6, 7, 8])

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        // in a real app, do something here like reloading data
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    function renderItems() {
        return items.map(Q => (
            <Card key={Q} containerStyle={styles.card}>
                <Card.Title>{Q}</Card.Title>
            </Card>)
        );
    }

    return (
        <ScrollView
            contentContainerStyle={styles.scrollView}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
        >
            {renderItems()}
        </ScrollView>
    );
}

export { Details };

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    card: {
        width: '90%'
    }
});