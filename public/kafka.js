const kafka = require('kafka-node');
const client = new kafka.KafkaClient();

kafka.Consumer()
const Consumer = kafka.Consumer;

const consumer = new Consumer(
    client,
        [
            { topic: 'test', partition: 0 }, { topic: 'test', partition: 1 }
        ],
        {
            autoCommit: false
        }
    );

 
consumer.on('message', function (message) {
    console.log(message);
});