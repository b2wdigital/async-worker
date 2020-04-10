Search.setIndex({docnames:["changelog/index","changelog/v0.10.0","changelog/v0.10.1","changelog/v0.11.0","changelog/v0.11.1","changelog/v0.11.2","changelog/v0.11.3","changelog/v0.11.4","changelog/v0.11.5","changelog/v0.12.0","changelog/v0.12.1","changelog/v0.13.0","changelog/v0.14.0","devguide/custom-decorators","devguide/index","devguide/tests","incompat","index","intro","src/asyncworker/asyncworker","src/asyncworker/asyncworker.easyqueue","src/asyncworker/asyncworker.http","src/asyncworker/asyncworker.rabbitmq","src/asyncworker/asyncworker.signals","src/asyncworker/asyncworker.signals.handlers","src/asyncworker/asyncworker.sse","src/asyncworker/asyncworker.testing","src/asyncworker/asyncworker.types","src/asyncworker/modules","userguide/asyncworker-app/hooks","userguide/asyncworker-app/index","userguide/asyncworker-app/intro","userguide/asyncworker-app/storage","userguide/handlers/http/doc","userguide/handlers/http/index","userguide/handlers/index","userguide/handlers/rabbitmq","userguide/index","userguide/quickstart","userguide/updates/index","userguide/utils/index","userguide/utils/run_every","userguide/utils/timeit","versions"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["changelog/index.rst","changelog/v0.10.0.rst","changelog/v0.10.1.rst","changelog/v0.11.0.rst","changelog/v0.11.1.rst","changelog/v0.11.2.rst","changelog/v0.11.3.rst","changelog/v0.11.4.rst","changelog/v0.11.5.rst","changelog/v0.12.0.rst","changelog/v0.12.1.rst","changelog/v0.13.0.rst","changelog/v0.14.0.rst","devguide/custom-decorators.rst","devguide/index.rst","devguide/tests.rst","incompat.rst","index.rst","intro.rst","src/asyncworker/asyncworker.rst","src/asyncworker/asyncworker.easyqueue.rst","src/asyncworker/asyncworker.http.rst","src/asyncworker/asyncworker.rabbitmq.rst","src/asyncworker/asyncworker.signals.rst","src/asyncworker/asyncworker.signals.handlers.rst","src/asyncworker/asyncworker.sse.rst","src/asyncworker/asyncworker.testing.rst","src/asyncworker/asyncworker.types.rst","src/asyncworker/modules.rst","userguide/asyncworker-app/hooks.rst","userguide/asyncworker-app/index.rst","userguide/asyncworker-app/intro.rst","userguide/asyncworker-app/storage.rst","userguide/handlers/http/doc.rst","userguide/handlers/http/index.rst","userguide/handlers/index.rst","userguide/handlers/rabbitmq.rst","userguide/index.rst","userguide/quickstart.rst","userguide/updates/index.rst","userguide/utils/index.rst","userguide/utils/run_every.rst","userguide/utils/timeit.rst","versions.rst"],objects:{"":{asyncworker:[19,0,0,"-"]},"asyncworker.app":{App:[19,1,1,""]},"asyncworker.app.App":{freeze:[19,2,1,""],get_connection:[19,2,1,""],get_connection_for_route:[19,2,1,""],handlers:[19,3,1,""],route:[19,2,1,""],run:[19,2,1,""],run_every:[19,2,1,""],run_on_shutdown:[19,2,1,""],run_on_startup:[19,2,1,""],shutdown:[19,2,1,""],shutdown_os_signals:[19,3,1,""],startup:[19,2,1,""]},"asyncworker.bucket":{Bucket:[19,1,1,""],BucketFullException:[19,4,1,""]},"asyncworker.bucket.Bucket":{is_empty:[19,2,1,""],is_full:[19,2,1,""],pop_all:[19,2,1,""],put:[19,2,1,""],used:[19,2,1,""]},"asyncworker.conf":{Settings:[19,1,1,""]},"asyncworker.conf.Settings":{Config:[19,1,1,""]},"asyncworker.conf.Settings.Config":{allow_mutation:[19,3,1,""],env_prefix:[19,3,1,""]},"asyncworker.connections":{AMQPConnection:[19,1,1,""],Connection:[19,1,1,""],ConnectionsMapping:[19,1,1,""],SSEConnection:[19,1,1,""]},"asyncworker.connections.AMQPConnection":{Config:[19,1,1,""],items:[19,2,1,""],keys:[19,2,1,""],put:[19,2,1,""],register:[19,2,1,""],set_connections:[19,2,1,""],values:[19,2,1,""]},"asyncworker.connections.AMQPConnection.Config":{arbitrary_types_allowed:[19,3,1,""]},"asyncworker.connections.ConnectionsMapping":{add:[19,2,1,""],with_type:[19,2,1,""]},"asyncworker.consumer":{Consumer:[19,1,1,""]},"asyncworker.consumer.Consumer":{consume_all_queues:[19,2,1,""],keep_runnig:[19,2,1,""],on_before_start_consumption:[19,2,1,""],on_connection_error:[19,2,1,""],on_consumption_start:[19,2,1,""],on_message_handle_error:[19,2,1,""],on_queue_error:[19,2,1,""],on_queue_message:[19,2,1,""],queue_name:[19,2,1,""],start:[19,2,1,""]},"asyncworker.easyqueue":{connection:[20,0,0,"-"],exceptions:[20,0,0,"-"],message:[20,0,0,"-"],queue:[20,0,0,"-"]},"asyncworker.easyqueue.connection":{AMQPConnection:[20,1,1,""]},"asyncworker.easyqueue.connection.AMQPConnection":{close:[20,2,1,""],connection_parameters:[20,2,1,""],is_connected:[20,2,1,""]},"asyncworker.easyqueue.exceptions":{EmptyQueueException:[20,4,1,""],InvalidMessageSizeException:[20,4,1,""],MessageError:[20,4,1,""],UndecodableMessageException:[20,4,1,""]},"asyncworker.easyqueue.message":{AMQPMessage:[20,1,1,""]},"asyncworker.easyqueue.message.AMQPMessage":{ack:[20,2,1,""],channel:[20,3,1,""],connection:[20,3,1,""],delivery_tag:[20,3,1,""],deserialized_data:[20,2,1,""],queue_name:[20,3,1,""],reject:[20,2,1,""],serialized_data:[20,3,1,""]},"asyncworker.easyqueue.queue":{BaseJsonQueue:[20,1,1,""],BaseQueue:[20,1,1,""],DeliveryModes:[20,1,1,""],JsonQueue:[20,1,1,""],QueueConsumerDelegate:[20,1,1,""]},"asyncworker.easyqueue.queue.BaseJsonQueue":{content_type:[20,3,1,""],deserialize:[20,2,1,""],serialize:[20,2,1,""]},"asyncworker.easyqueue.queue.BaseQueue":{deserialize:[20,2,1,""],serialize:[20,2,1,""]},"asyncworker.easyqueue.queue.DeliveryModes":{NON_PERSISTENT:[20,3,1,""],PERSISTENT:[20,3,1,""]},"asyncworker.easyqueue.queue.JsonQueue":{consume:[20,2,1,""],deserialize:[20,2,1,""],put:[20,2,1,""],serialize:[20,2,1,""],stop_consumer:[20,2,1,""]},"asyncworker.easyqueue.queue.QueueConsumerDelegate":{on_before_start_consumption:[20,2,1,""],on_connection_error:[20,2,1,""],on_consumption_start:[20,2,1,""],on_message_handle_error:[20,2,1,""],on_queue_message:[20,2,1,""]},"asyncworker.exceptions":{InvalidConnection:[19,4,1,""],InvalidRoute:[19,4,1,""]},"asyncworker.http":{decorators:[21,0,0,"-"],wrapper:[21,0,0,"-"]},"asyncworker.http.decorators":{parse_path:[21,5,1,""]},"asyncworker.http.wrapper":{RequestWrapper:[21,1,1,""]},"asyncworker.options":{Actions:[19,1,1,""],AutoNameEnum:[19,1,1,""],DefaultValues:[19,1,1,""],Events:[19,1,1,""],Options:[19,1,1,""],RouteTypes:[19,1,1,""]},"asyncworker.options.Actions":{ACK:[19,3,1,""],REJECT:[19,3,1,""],REQUEUE:[19,3,1,""]},"asyncworker.options.DefaultValues":{BULK_FLUSH_INTERVAL:[19,3,1,""],BULK_SIZE:[19,3,1,""],ON_EXCEPTION:[19,3,1,""],ON_SUCCESS:[19,3,1,""],RUN_EVERY_MAX_CONCURRENCY:[19,3,1,""]},"asyncworker.options.Events":{ON_EXCEPTION:[19,3,1,""],ON_SUCCESS:[19,3,1,""]},"asyncworker.options.Options":{BULK_FLUSH_INTERVAL:[19,3,1,""],BULK_SIZE:[19,3,1,""],CONNECTION_FAIL_CALLBACK:[19,3,1,""],MAX_CONCURRENCY:[19,3,1,""]},"asyncworker.options.RouteTypes":{AMQP_RABBITMQ:[19,3,1,""],HTTP:[19,3,1,""],SSE:[19,3,1,""]},"asyncworker.rabbitmq":{message:[22,0,0,"-"]},"asyncworker.rabbitmq.message":{RabbitMQMessage:[22,1,1,""]},"asyncworker.rabbitmq.message.RabbitMQMessage":{accept:[22,2,1,""],body:[22,2,1,""],process_exception:[22,2,1,""],process_success:[22,2,1,""],reject:[22,2,1,""],serialized_data:[22,2,1,""]},"asyncworker.routes":{AMQPRoute:[19,1,1,""],HTTPRoute:[19,1,1,""],Model:[19,1,1,""],Route:[19,1,1,""],RoutesRegistry:[19,1,1,""],SSERoute:[19,1,1,""],call_http_handler:[19,5,1,""],http_handler_wrapper:[19,5,1,""]},"asyncworker.routes.HTTPRoute":{aiohttp_routes:[19,2,1,""],validate_method:[19,2,1,""]},"asyncworker.routes.Model":{get:[19,2,1,""],keys:[19,2,1,""]},"asyncworker.routes.Route":{factory:[19,2,1,""]},"asyncworker.routes.RoutesRegistry":{add_route:[19,2,1,""],amqp_routes:[19,3,1,""],http_routes:[19,3,1,""],route_for:[19,2,1,""],sse_routes:[19,3,1,""]},"asyncworker.routes.SSERoute":{add_default_headers:[19,2,1,""]},"asyncworker.signals":{base:[23,0,0,"-"],handlers:[24,0,0,"-"]},"asyncworker.signals.base":{Freezable:[23,1,1,""],Signal:[23,1,1,""]},"asyncworker.signals.base.Freezable":{freeze:[23,2,1,""],frozen:[23,2,1,""]},"asyncworker.signals.base.Signal":{send:[23,2,1,""]},"asyncworker.signals.handlers":{base:[24,0,0,"-"],http:[24,0,0,"-"],rabbitmq:[24,0,0,"-"],sse:[24,0,0,"-"]},"asyncworker.signals.handlers.base":{SignalHandler:[24,1,1,""]},"asyncworker.signals.handlers.base.SignalHandler":{shutdown:[24,2,1,""],startup:[24,2,1,""]},"asyncworker.signals.handlers.http":{HTTPServer:[24,1,1,""]},"asyncworker.signals.handlers.http.HTTPServer":{shutdown:[24,2,1,""],startup:[24,2,1,""]},"asyncworker.signals.handlers.rabbitmq":{RabbitMQ:[24,1,1,""]},"asyncworker.signals.handlers.rabbitmq.RabbitMQ":{startup:[24,2,1,""]},"asyncworker.signals.handlers.sse":{SSE:[24,1,1,""]},"asyncworker.signals.handlers.sse.SSE":{startup:[24,2,1,""]},"asyncworker.sse":{consumer:[25,0,0,"-"],message:[25,0,0,"-"]},"asyncworker.sse.consumer":{SSEConsumer:[25,1,1,""],State:[25,1,1,""]},"asyncworker.sse.consumer.SSEConsumer":{interval:[25,3,1,""],keep_runnig:[25,2,1,""],on_connection:[25,2,1,""],on_connection_error:[25,2,1,""],on_event:[25,2,1,""],on_exception:[25,2,1,""],start:[25,2,1,""]},"asyncworker.sse.consumer.State":{EVENT_DATA_FOUND:[25,3,1,""],EVENT_NAME_FOUND:[25,3,1,""],WAIT_FOR_DATA:[25,3,1,""]},"asyncworker.sse.message":{SSEMessage:[25,1,1,""]},"asyncworker.task_runners":{ScheduledTaskRunner:[19,1,1,""]},"asyncworker.task_runners.ScheduledTaskRunner":{can_dispatch_task:[19,2,1,""],start:[19,2,1,""],stop:[19,2,1,""]},"asyncworker.testing":{HttpClientContext:[26,1,1,""],http_client:[26,5,1,""]},"asyncworker.time":{ClockTicker:[19,1,1,""]},"asyncworker.time.ClockTicker":{stop:[19,2,1,""]},"asyncworker.types":{registry:[27,0,0,"-"],resolver:[27,0,0,"-"]},"asyncworker.types.registry":{RegistryItem:[27,1,1,""],TypesRegistry:[27,1,1,""]},"asyncworker.types.registry.TypesRegistry":{get:[27,2,1,""],set:[27,2,1,""]},"asyncworker.types.resolver":{ArgResolver:[27,1,1,""],MissingTypeAnnotationError:[27,4,1,""]},"asyncworker.types.resolver.ArgResolver":{resolve_param:[27,2,1,""],wrap:[27,2,1,""]},"asyncworker.utils":{Timeit:[19,1,1,""],entrypoint:[19,5,1,""]},"asyncworker.utils.Timeit":{TRANSACTIONS_KEY:[19,3,1,""]},asyncworker:{app:[19,0,0,"-"],bucket:[19,0,0,"-"],conf:[19,0,0,"-"],connections:[19,0,0,"-"],consumer:[19,0,0,"-"],easyqueue:[20,0,0,"-"],exceptions:[19,0,0,"-"],http:[21,0,0,"-"],options:[19,0,0,"-"],rabbitmq:[22,0,0,"-"],routes:[19,0,0,"-"],signals:[23,0,0,"-"],sse:[25,0,0,"-"],task_runners:[19,0,0,"-"],testing:[26,0,0,"-"],time:[19,0,0,"-"],types:[27,0,0,"-"],utils:[19,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","exception","Python exception"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:exception","5":"py:function"},terms:{"0994415283203125e":42,"0x10c10c7c8":42,"\u00fanico":32,"\u00fatei":33,"a\u00e7\u00e3o":37,"abstract":[19,20],"ap\u00f3":36,"aplic\u00e1":13,"aplica\u00e7\u00e3o":[9,16,17,29,31,32],"aplica\u00e7\u00f5":16,"ass\u00edncrona":[16,17,30,36,37],"ass\u00edncrono":[16,17,29,42],"at\u00e9":[36,43],"aten\u00e7\u00e3o":43,"atrav\u00e9":[33,34,37],"autentica\u00e7\u00e3o":33,"byte":[19,20,25],"c\u00f3digo":[8,13,16,31,32,33,37,38,42,43],"c\u00f3pia":35,"causar\u00e1":16,"cen\u00e1rio":29,"ci\u00eancia":13,"class":[15,17,19,20,21,22,23,24,25,26,27,30,33,36,37,42],"come\u00e7a":31,"compat\u00edvel":[12,36,43],"comunica\u00e7\u00e3o":36,"conclu\u00edda":36,"conex\u00e3o":[10,29,36,38],"conex\u00f5":[11,29,31],"conte\u00fado":39,"cria\u00e7\u00e3o":[34,35,36,37],"declara\u00e7\u00e3o":36,"decor\u00e1":33,"default":[19,36],"defini\u00e7\u00e3o":33,"depend\u00eancia":12,"descri\u00e7\u00e3o":2,"dicion\u00e1rio":[32,36],"din\u00e2mico":[13,33],"ent\u00e3o":[32,33,36,39],"enum":[19,25,31,39],"espec\u00edfico":16,"est\u00e1":[12,15,16,17,31,33,36,38,39,43],"est\u00e3o":[13,31,33,36],"est\u00edmulo":[16,17,31,35],"estar\u00e1":[8,31,34,35,37,38],"estat\u00e3o":36,"exca\u00e7\u00e3o":36,"exce\u00e7\u00e3o":[36,42],"execu\u00e7\u00e3o":[22,36,42],"explica\u00e7\u00e3o":8,"f\u00f3rmula":36,"far\u00e1":31,"far\u00e3o":31,"ficar\u00e1":38,"final":42,"finaliza\u00e7\u00e3o":29,"float":19,"forma\u00e7\u00e3o":43,"fun\u00e7\u00e3o":[13,17,19,33,35,36,37,40],"fun\u00e7\u00f5":31,"function":13,"funda\u00e7\u00e3o":33,"implementa\u00e7\u00e3o":[8,33],"implementa\u00e7\u00f5":8,"import":[13,29,33,34,36,38,39,41,42],"imposs\u00edvel":11,"in\u00edcio":[17,37],"incompat\u00edvel":[16,43],"informa\u00e7\u00f5":34,"inicializa\u00e7\u00e3o":29,"inicializa\u00e7\u00f5":[17,30,37],"inst\u00e2ncia":[8,31,32,33,34,36,38,39,42],"instru\u00edmo":33,"int":[19,20,22,33,36],"integra\u00e7\u00e3o":2,"intermedi\u00e1rio":13,"introdu\u00e7\u00e3o":17,"ir\u00e1":36,"lan\u00e7ar":[36,38],"m\u00e1ximo":36,"m\u00e9todo":[1,19,31,33,36,39,41],"m\u00e9trica":42,"m\u00f3dulo":[31,33,38],"m\u00faltipla":[37,40],"m\u00faltiplo":[15,16,31],"manipula\u00e7\u00e3o":32,"manuten\u00e7\u00e3o":32,"mudan\u00e7a":[11,39,43],"n\u00e3o":[2,8,11,13,15,16,19,32,33,35,36],"n\u00edvel":33,"n\u00famero":36,"necess\u00e1rio":[13,31,36],"new":[6,19,20,33,34,42],"obrigat\u00f3rio":[31,39],"op\u00e7\u00f5":[31,36],"p\u00f3s":39,"padr\u00e3o":[15,33,36,39],"par\u00e2metro":[31,34,35,36,37],"parametriza\u00e7\u00e3o":[34,35,37],"poder\u00e1":[32,35,36],"poss\u00edvei":31,"poss\u00edvel":[13,32,33,36,38,42],"pr\u00e1tica":32,"pr\u00e9via":36,"pr\u00f3prio":[13,32],"pr\u00f3ximo":33,"preced\u00eancia":36,"precisar\u00e1":33,"r\u00e1pido":[17,37],"raz\u00e3o":13,"receber\u00e1":[33,36,38],"recomenda\u00e7\u00e3o":8,"renova\u00e7\u00e3o":16,"representar\u00e1":36,"requisi\u00e7\u00e3o":[17,33,38],"requisi\u00e7\u00f5":[34,37],"resolu\u00e7\u00e3o":[13,33],"respons\u00e1vel":33,"return":[13,19,20,33,34,38],"s\u00e3o":[31,34,35,36,37],"s\u00f3lido":19,"saber\u00e1":[13,33],"ser\u00e1":[8,19,22,31,33,35,37,41,42,43],"ser\u00e3o":[31,33],"servir\u00e1":33,"situa\u00e7\u00f5":36,"static":19,"tamb\u00e9m":[31,33,36,42],"tentar\u00e1":33,"ter\u00e1":[16,43],"transa\u00e7\u00f5":[37,40],"trav\u00e9":33,"true":[15,19,22,36,38],"unit\u00e1rio":[14,17],"usu\u00e1rio":33,"utilit\u00e1rio":[17,37],"utilit\u00e1tio":41,"utiliz\u00e1":32,"v\u00e1lido":33,"v\u00e1ria":[16,17,42],"v\u00eam":39,"vari\u00e1vei":[32,33],"vari\u00e1vel":36,"ver\u00e1":36,"vers\u00e3o":[4,8,9,11,12,39,43],"vers\u00f5":[8,9,17,39],"ves\u00f5":39,"voc\u00ea":[8,9,11,12,15,16,17,31,32,33,35,36,38,39,43],Adding:6,Ele:31,Eles:33,Obs:32,THe:19,The:[19,20],Useful:20,__call__:33,_amqprouteopt:36,_asyncio:19,_handler:36,_hooks_:32,_id:33,_on_ev:38,_type:27,_wrapper:[13,33],abaixo:[17,35],abc:19,aberta:29,abrimo:29,abstracteventloop:20,accept:[22,36],access:42,access_some_remote_cont:42,acessando:36,acessar:11,acesso:[11,38],acima:33,ack:[19,20,22,36,38,39],acordo:35,act:19,action:[19,22,36],add:19,add_default_head:19,add_rout:19,adiciona:33,adicionado:33,adicionai:37,adicionando:[1,8],adicionar:[1,8,15],age:32,agora:39,aguarda:36,aguardando:36,ainda:[8,33,43],aioamqp:[6,20],aiohttp:[8,19,21,33,34,43],aiohttp_rout:19,aiologg:[9,16],aioredi:29,ajust:[8,43],ajustar:[11,43],algum:33,alguma:[13,33,36,38,43],algun:[33,35,36],all:[19,20,23],allow:19,allow_mut:19,along:19,also:19,alterada:12,alterado:33,alterar:36,amba:[36,38],ambient:36,ambo:38,amqp_conn:[36,38],amqp_messag:[22,36],amqp_rabbitmq:[19,32,36,38,42],amqp_rout:19,amqpconnect:[19,20,37,38],amqpmessag:[19,20,22,36],amqprout:19,ancestr:19,ani:[19,20,23,27],anotar:41,anoth:36,another_exchang:36,ant:[11,29,33],anterior:[16,29],antigo:[39,43],apena:[13,16,34,35,36,37,43],aplicado:[13,33],aplicando:[8,14,17],app:[3,13,16,17,24,26,28,33,34,36,37,38,41,42],appid:38,applic:[19,20],aqui:[13,15,33,34,36,39],arbitrary_types_allow:19,arg:23,argresolv:27,argument:[19,20,23],armazenando:[30,37],armazenar:32,asgard:[36,38,39],assim:[13,29,33,36,38,39],assinatura:[31,33,36,39],assumindo:38,async:[11,13,17,19,20,22,23,24,25,29,32,33,34,36,38,39,41,42],asyncio:[19,20,23,42],asynciter:19,asyncowk:[17,31],asynctest:15,asyncwork:[1,8,12,13,16,29,32,33,34,35,36,37,38,41,42,43],asyncworker_:19,asyncworker_flush_timeout:36,asyncworker_http_host:33,asyncworker_http_port:33,asynqueu:[19,20],asynwork:38,atendar:38,atributo:[15,33,34,36,39],atual:8,atualiza:12,atualizada:[4,43],atualizado:43,atualizamo:9,atualizando:[17,37],atualment:16,aumentada:43,autenticado:33,autenticar:33,auth_requir:33,author:33,auto:19,automat:19,automaticament:[36,38],autonameenum:19,avail:19,await:[13,19,29,33,36,42],b2wdigit:17,badg:8,banco:29,base:[19,20,21,22,25,26,27,28],basejsonqueu:20,basemodel:19,basequeu:20,baseset:19,basic_auth:33,basicament:43,basta:[15,33,36,41],befor:[19,20],behav:[19,23],bem:[8,29,34],biblioteca:29,bind:33,boa:32,bodi:[19,20,22,38,39],bool:[19,20],boot:31,broker:[10,17,20,36],bucket:[25,28,36],bucket_class:[19,25],bucketfullexcept:19,build:8,bulk:36,bulk_flush_interv:[6,19,36],bulk_siz:[19,37,38],by_id:33,cada:[15,31,35,37,38,39],calabl:7,call:[19,20],call_http_handl:[13,19,33],callabl:[7,19,20,34,35,37,42],callback:[10,19,20,23,42],caminho:43,campo:37,can:20,can_dispatch_task:19,cancel:20,capaz:38,caso:[10,15,29,33,36,38,42],caus:19,causa:[15,35],central:31,cercando:33,certeza:15,chamada:[8,10,19,33,35,36,41,42],chamado:[13,31,33,35,36,42],chamamo:31,chamando:[33,39],chamar:[13,33,36,42],chang:1,changelog:[17,39,43],channel:20,chave:36,chegar:35,chegarmo:43,ciclo:[16,29,32],classifi:8,classmethod:19,client:[20,29],climat:8,clock:19,clocktick:19,close:[20,29],code:[1,6,8,9],codeclim:8,codeown:1,coerent:2,coisa:43,collect:[19,23],com:[2,9,10,11,12,13,15,16,17,29,31,32,33,34,35,36,38,39,41,42,43],comando:38,commit:[3,4,5,6,7,8,9,10,11,12],common:19,como:[7,8,16,17,29,31,32,33,34,35,36,42,43],compartilhado:32,compartilhamento:[17,30,37],compartilhar:29,compat:6,compatibilidad:17,completo:37,complexa:[33,43],complexo:33,comportamento:[11,16],comum:29,condit:19,conduct:6,conectado:31,conectar:36,conf:28,confiando:12,config:19,configurado:39,confirmada:[22,36,38],conflito:32,connect:[3,23,28,31,36,38],connection_fail_callback:[19,20,36],connection_paramet:20,connectionsmap:19,consegu:36,conseguir:36,considerada:8,considerado:43,consiga:33,construtor:[31,33,36],consultar:39,consum:[20,28],consume_all_queu:19,consumer_nam:20,consumer_tag:[19,20],consumindo:37,consumpt:[19,20],contar:42,content:28,content_typ:20,conter:33,contexto:[33,37,40],contribut:6,coro:19,coro_ref:27,corotina:[13,33,34],coroutin:[19,20,23,42],correta:13,corretament:[13,33],correto:11,count:[36,38,39],counter:19,coverag:1,create_pool:29,cria:16,criada:29,criamo:39,criando:[15,30,37],criar:[35,36],curl:38,custom:[19,20],customizado:[8,14,17],dada:37,dado:[17,29,30,33,37,42],das:[31,36,39],data:[8,9,10,11,12,19,20,23,36,38],deadlock:36,declara:1,declaramo:[31,38],declarar:33,decod:20,decor:[8,14,17,19,28,31,34,35,37,40,41],decorada:[13,33,34],decorado:33,decoramo:33,decorando:13,decorato:33,decortor:36,def:[13,29,32,33,34,36,38,39,41,42],defaultvalu:[19,36],defin:19,definida:36,definido:[12,31,33],definindo:[30,36,37],definir:36,definit:19,delath:33,dele:[33,34,35],deleg:20,delegate_class:20,delivery_tag:[19,20,22,36],deliverymod:20,demandar:43,dentro:[31,36,42],dep:9,depend:[1,43],dependa:16,dependencia:[2,9],dependento:31,deployment_info:38,deployment_success:38,depoi:[29,33,39],depositada:31,depreciada:[8,19],descartada:[22,36],desconectado:38,desejado:36,desenvolvimento:[17,43],deseri:[19,20],deserialization_method:20,deserialized_data:20,dess:[33,35,36],dessa:[11,31,36,39,43],destino:36,detalh:[8,17,34,35],deve:[11,13,19,31,33,36],devem:[13,33],deveremo:33,devolv:36,devolvida:[36,38,39],diariament:36,dict:[19,20,25,31,36],diferent:[16,17,35,36],diretament:33,disponibiliza:32,disso:[13,36],diz:36,dizendo:33,dizer:31,doc:[1,6,15,34],document:7,documentar:19,dog:36,doi:[33,43],dos:[11,13,15,31,36],drain_handl:[32,36,38,39,42],dua:[9,43],durant:[16,36],dure:[19,20],each:19,easyqueu:[1,19,22,28,36],econtra:17,efetivament:31,ela:41,ele:[16,33,36],eles:36,emptyqueueexcept:20,enabl:6,encher:36,encontrado:33,encontrando:33,endpoint:37,entando:13,entend:[16,17,35],entregu:34,entrypoint:19,enumer:[19,25],env:[34,35,36,37],env_prefix:19,env_set:19,envelop:20,enviado:38,enviar:36,envvar:33,era:39,erro:[1,10,33,36,38],error:[19,36,38,39,42],escolh:[32,34,35,37],escolhendo:37,escolhido:36,escrev:[13,15,16,17,33,34,36],escrevendo:[14,16,17],escrito:36,escutando:[34,35,37],especi:31,especialment:33,esperando:36,esperar:36,esquerda:11,ess:[8,13,19,29,31,32,33,36,38,43],essa:[8,9,11,13,16,17,19,22,31,33,34,36,41],estado:32,estamo:[33,38],estar:[13,33],estavam:2,esteja:16,estejam:33,estimulado:34,estiv:[11,19,36],estiver:39,esvaziar:36,event:[17,19,20,23,36,37,39],event_bodi:25,event_data_found:25,event_handl:39,event_nam:[25,38],event_name_found:25,event_raw_bodi:25,evento:[16,17,29,35,38],everi:[19,20],every_5_second:41,evitar:[32,36],exc_tb:42,exc_typ:42,exc_val:42,except:[25,27,28,36,38,39],exchang:[19,20,36],executado:31,exemplo:[13,29,33,35,37,38],existem:36,exmeplo:31,experiment:33,explicitament:[12,33,42],externo:35,extra_registri:27,extrair:[33,34],factori:19,fail:[19,20],fail_handl:36,falar:31,falaremo:38,falha:36,falharam:36,fals:[19,20,22,36],falta:43,faremo:33,fato:16,faz:[15,33],fazemo:[33,43],fazendo:8,fazer:[13,29,33,34,39],fazia:11,featur:[1,6,7,8,9],fechar:29,feito:33,ficar:36,ficou:36,fila:[22,31,35,36,37,39],file:5,fim:[22,29,36],fiqu:36,fire:23,fix:8,fixa:36,fixo:[17,37,40],fluentd:[36,38,39],flush:37,flush_timeout:36,foi:12,foo:[11,42],forma:[31,33],foss:11,framework:[16,17],freez:[19,23],freezabl:[19,23],frent:38,from:[6,13,20,29,33,34,36,38,39,41,42],frozen:23,funciona:[8,17],functool:13,further:[19,20],futur:19,futura:8,futuro:8,gener:[3,19,20],gera:33,gerado:[16,17,38],geral:[16,38],gerenciador:[37,40],get:[13,19,20,27,33,34,38],get_authenticated_us:33,get_connect:19,get_connection_for_rout:19,get_event_loop:42,gitattribut:8,github:17,given:19,globai:[32,33],guardar:33,guest:[36,38,39],guia:17,haja:[10,36],handl:[19,20,36],handlar:31,handler:[7,8,14,17,19,21,22,23,30,32,34,36,37,38,39],handler_error:[19,20],happen:19,header:33,heartbeat:20,hello:38,hook:[1,17,30,37],host:[19,20,36,38,39],hostnam:36,html:34,http:[8,14,17,19,23,28,31,35,37],http_client:26,http_handler_wrapp:19,http_request:[13,21,33,34],http_rout:19,httpclientcontext:26,httprout:19,httpserver:[19,24],httpstatu:33,ideia:38,identifi:20,immedi:[19,20],implement:[19,20,23],implementa:7,important:33,impotant:33,inclus:32,incompatibilidad:[15,17],indeterminado:[16,17],index:[17,38],indica:[22,36],individualment:37,info:39,inici:11,inicializada:29,init_redi:29,initi:[19,20],injetado:32,inner:13,insert:1,insid:19,instanc:[19,20],instanciado:33,inteiro:36,interessa:33,interv:[19,25],intervalo:[17,37,40],invalid:19,invalidconnect:19,invalidmessagesizeexcept:20,invalidrout:19,is_connect:20,is_empti:19,is_ful:19,isn:20,isso:[8,11,12,13,15,16,17,31,32,33,35,36,38,39,42,43],issu:[1,16],item:19,iter:[19,31],json:[20,38],json_respons:[13,33,34,38],jsonqueu:[19,20],junto:13,keep:19,keep_runnig:[19,25],kei:[19,20,36],keyerror:42,kwarg:[1,19,20,23,31,42],languag:8,lembrando:43,lembrar:32,len:38,lendo:37,levantada:42,liberar:36,licens:5,lidando:33,like:[19,36],linha:[38,43],list:[19,23,25,36,39],lista:[13,31,33,35,36,38,39],localhost:29,lock:23,log:[16,20,38],log_callback:42,logger:[20,39],logo:33,longo:[32,43],loop:[15,16,19,20,29,38,42],los:[13,32],lote:39,lstrip:11,mai:[2,8,13,17,19,20,34,35,37,38,43],main:[19,38,42],maior:16,mandatori:[19,20],mantemo:8,manter:[29,32],manualment:33,map:19,marca:[22,36],marcar:42,mas:[8,33,36,39,43],match:33,max_concurr:19,max_message_length:20,melhor:[8,39],melhorar:1,menor:36,mensagem:[1,17,22,31,35,36,38,39],mensagen:[35,36,38,39],mensgem:37,mesma:[33,42,43],mesmo:[11,31,33,35,36,38,42],messag:[19,28,32,36,38,39,42],messageerror:[19,20],method:[1,13,23,33,34,38],min:36,minor:43,missingtypeannotationerror:27,model:[19,33,39],modelo:36,modul:[1,17,28],momento:[13,33,36],mostrar:38,mostraremo:34,move:1,msg:[19,20,36],muda:12,mudam:35,mudamo:43,mudando:2,mudar:39,mudo:39,mudou:39,muita:42,muito:16,multipl:3,mutablemap:19,my_handler_decor:13,myapp:41,myproject:33,mywork:38,nada:[12,36],name:[8,19,20,23,38,42],nao:1,nas:12,necessariament:31,necessidad:[29,33],necessita:36,necessitam:29,need:20,nem:36,nenhum:33,nenhuma:36,ness:[31,33,36,38,41],nessa:[8,9,39],nome:[11,32,33,36],non_persist:20,none:[19,20,25,27,31,42],nos:32,nossa:31,nosso:33,nota:37,notar:33,notif:20,nova:[9,12,30,35,36,37,43],novo:[15,16,43],obj:27,object:[19,20,21,22,23,24,25,26,27,42],objetivo:[16,17],objeto:[7,13,31,34,35,36,37,38,39,41],obtain:6,occur:19,ocorreu:36,olh:43,olha:33,olhar:43,on_before_start_consumpt:[19,20],on_connect:25,on_connection_error:[19,20,25],on_consumption_start:[19,20],on_error:20,on_ev:25,on_except:[19,22,25,36],on_message_handle_error:[19,20],on_queue_error:19,on_queue_messag:[19,20],on_shutdown:29,on_startup:[19,29],on_success:[19,22,36],onc:[19,20],ond:[19,31,34,35,36,37],one:20,one_param:34,opcionalment:36,option:[6,20,22,27,28,31,37,38],org:34,origem:[31,35],origen:[16,17,31],origin:[22,33,34,36,39],original_queu:36,orign:16,other:36,outra:36,outro:[31,33,36,43],overwritten:[19,20],owner:23,packag:28,page:17,para:[2,4,8,9,11,12,13,15,16,17,18,22,29,31,32,34,35,37,38,39,42,43],param:20,param_nam:27,param_typ:27,paramet:[6,19,20],parameter:8,parametro:[13,22,31,33,35,37],parse_path:[21,33],partir:39,pass:[33,36,39],passa:[34,39],passada:36,passado:[33,36],passagem:11,passam:8,passando:11,passar:33,passarem:8,passaremo:33,passarmo:36,password:[19,20,25,36,38,39],patch:43,path:[31,34,35,37],payload:20,peculiaridad:43,pegando:33,pegar:36,pelo:[12,13,16,32,33,34,36,38],permit:[13,29,33,41],permitido:33,persist:20,persistent:29,pinado:12,plan:38,pleno:43,pode:[33,35,36,39,42,43],podem:[16,17,31,33],podemo:[32,34,35,36],poder:[33,36],poderem:38,poderia:13,poi:[11,33],ponto:[31,36,38],pop_al:19,popular:33,por:[15,16,17,29,31,33,35,36,39,43],porqu:[33,35],porta:[34,35,37],posit:1,possa:33,possibilidad:39,possuem:[33,36],possui:[33,36],posui:41,potencialment:43,pra:36,prametro:33,precisa:[15,33,36,43],precisam:[33,38],precisamo:[29,36],precisar:[39,43],precisarem:43,precisarmo:34,preciso:[12,34,36],prefetch:37,prefetch_count:[19,20,36,38,39],prefretch:36,preparado:8,presa:36,present:33,primeiro:[8,19,31,33],princip:[13,17,30,36,37],print:[36,38,41,42],printit:42,problema:[16,43],process_except:22,process_success:22,processar:36,processed_messag:32,processo:29,procurar:33,program:8,projeto:[2,12,16,18,43],properti:[19,20,22,23],provid:20,publica:36,publicada:36,publish:20,puder:33,put:[19,20,36],py38:8,pydant:[2,4,9,12,19,36,43],python:[6,8,16,17],quaisquer:[31,33,43],qual:[31,37],qualquer:[16,17],quando:[1,19,33,34,35,36,38,43],que:[8,9,11,12,13,15,16,17,19,29,31,32,34,35,36,37,38,39,41,43],queira:36,quem:[13,31],quer:[33,36],queremo:42,queue:[19,28,36,42],queue_nam:[19,20],queueconsumerdeleg:[19,20],rabbitmq:[11,17,19,23,28,31,35,37,39],rabbitmqmessag:[19,22,36,39],rabitmq:36,rais:[19,20,42],random:20,raw:[3,4,5,6,7,8,9,10,11,12,19],readi:[19,20],real:33,realizar:36,receb:[8,13,19,31,33,34,35,36,38,39,42],receba:[13,16,17,33],recebam:36,recebem:[13,34,35,37],recebemo:19,recebendo:[8,34,35,36,37],recebida:37,recebido:[33,36],receiv:[19,23,38],recolocada:[22,36],recomendado:[9,43],recomendamo:32,reconectar:38,recorrent:17,redi:29,reflet:33,regist:[19,23],registr:29,registra:31,registrada:31,registrado:[33,35],registrando:31,registrar:31,registri:[8,19,21,28,33],registryitem:27,regra:[13,34,35,37],reject:[19,20,22,36,38,39],rejeitada:[22,36],rejeitar:36,releas:[8,9,10,11,12],remov:[1,11],removida:8,report:[1,8],representa:[29,31],requer:43,request:[8,9,13,19,21,31,34,35,37],requestwrapp:[8,13,19,21,33,34,38],requeu:[19,20,22,36,38],resolv:[19,28],resolve_param:27,respectivament:33,respons:[19,34,38],resultado:33,retentativa:36,retorna:[33,34],retornada:13,retornar:39,retorno:33,retri:36,retro:43,rodada:41,rodado:[2,15,38],rodando:[17,29,37,40],rodar:[36,38],rodarem:29,rode:[16,17],rota:[31,36,38],rout:[1,6,13,20,28,31,32,34,35,37,38,39,42],route_for:[1,19],route_info:[19,25],route_typ:19,routedef:19,routesregistri:[1,19],routetyp:[13,19,31,32,33,34,36,38,39,42],routing_kei:[19,20,36],run:[19,29,31,38,41],run_everi:[19,41],run_every_max_concurr:19,run_on_shutdown:[19,30,37],run_on_startup:[1,19,30,37],run_until_complet:42,runner:15,saber:[31,43],schedul:19,scheduledtaskrunn:19,search:17,second:19,seconds_between_conn_retri:20,segu:[33,43],seguint:[31,33,36,38,43],seguir:33,segundo:36,seja:[13,16,31,33,36,38,41,42,43],sejam:[31,32],self:33,sem:[11,33,36,38,39,43],sempr:[13,33,36,38,43],semver:43,send:[20,23],sendo:[2,15,16,33],ser:[2,11,12,13,16,17,22,29,31,33,34,35,36,38,39,43],seria:38,serial:20,serializ:20,serialized_data:[19,20,22],server:[17,34,35,37],servidor:[17,36,38],set:[19,27,33],set_connect:19,setup:[2,4],seu:[8,11,12,13,15,16,31,32,33,35,36,37,43],should:[19,20],shudtdown:[17,30,37],shutdown:[19,24],shutdown_os_sign:19,side:[17,37],sigint:19,signal:[19,28],signalhandl:24,significa:[11,12,16,33,36,43],significado:31,sigterm:19,sim:33,simpl:[13,33,34,43],simplesmet:34,sinaliza:29,singleton:32,sintax:33,size:19,sleep:[19,42],sobr:[8,17,30,37,38],someth:19,sourc:[19,20,21,22,23,24,25,26,27,31,36],sphinx:[1,6],sse:[19,23,28,38,39],sse_conn:38,sse_rout:19,sseconnect:[19,38],sseconsum:25,ssemessag:25,sserout:19,stabl:34,stage:[19,20],start:[19,20,25],startup:[17,19,24,30,37],state:25,statu:33,status_update_ev:38,stop:[19,20],stop_consum:20,str:[19,20,25,27,31],structur:6,sua:[9,15,16,17,29,30,33,36,37,38,43],subclass:19,submodul:28,subpackag:28,substitui:16,sucesso:[33,36],suficient:33,suport:7,suporta:35,tag:[1,2,3,4,5,6,7,8,9,10,11,12,20],take:23,talvez:33,tamanho:36,task:[19,38],task_runn:28,taskid:38,taskstatu:38,teham:36,tem:[12,13,16,17,31,34,36],temo:[13,31,33,36],tempo:[16,17,35,36,37,40,42],tentanto:38,tentar:33,tentativa:8,tentava:11,ter:[15,36,42],test:[2,9,14,17,19,28],tha:23,tick:19,time:[20,28,42],timeit:[17,19,37,40],timeout:37,tipo:[17,31,33,36,37],tivermo:36,toda:[11,32,36,39],todo:[8,16,31,33,36],tomada:36,topo:13,tornamo:39,tornando:32,total:42,totalment:12,traceback:42,track:19,transact:[19,42],transactions_kei:19,tratada:[16,36],tratamento:36,trazido:12,trigger:[19,20],tudo:17,type:[8,13,19,20,21,25,28,31,32,33,34,36,38,39,42],type_definit:27,typehint:33,types_registri:[21,33],typesregistri:[21,27,33],uma:[1,8,13,17,29,30,32,33,34,35,37,39,40,42,43],unauthor:33,uncaught:[19,20],undecodablemessageexcept:20,union:[19,20,25],unpars:19,updat:[6,8,9],url:[25,38],usa:36,usada:[31,36],usado:[31,33,36],usag:19,usam:16,usamo:29,usando:38,usar:[13,16],use:[8,9,23],use_default_loop:15,used:[19,20],user:[33,36,38,39],user_id:33,userdict:19,userlist:23,usernam:[19,20,25,36],using:23,uso:[17,29,39],util:[28,32,42],utilizado:32,utilizando:29,utilizar:[32,42],vai:[9,33,36,43],vale:32,valid:[19,20],validar:12,validate_method:19,valor:[33,37,43],valu:[19,27],valueerror:[19,20],vamo:[19,33],vazia:33,veja:34,vejamo:[33,34],vem:13,ver:35,version:[33,34,42,43],versionamento:43,vez:[2,36],veze:42,vhost:[11,19,36,38,39,42],via:16,vida:[16,29,32],vindo:[34,35,37],virtual:[19,36],virtual_host:20,wait:19,wait_clos:29,wait_for_data:25,web:[8,13,19,33,34,38],web_request:[19,21],web_routedef:19,when:[19,20],which:23,with_typ:19,words_to_index:32,worker:[11,16,17,29,37],world:38,wrap:[13,27],wrapper:[8,9,13,19,28,33,34,38],xablau:[36,42],xena:36,xxxxxxxxxxxxx:19,zerado:36},titles:["Changelog","0.10.0","0.10.1","0.11.0","0.11.1","0.11.2","0.11.3","0.11.4","0.11.5","0.12.0","0.12.1","0.13.0","0.14.0","Aplicando decorators customizados a um handler HTTP","Guia de desenvolvimento","Escrevendo Testes Unit\u00e1rios","Incompatibilidades","Bem vindos \u00e0 documenta\u00e7\u00e3o oficial do projeto Asyncworker","Introdu\u00e7\u00e3o","asyncworker package","asyncworker.easyqueue package","asyncworker.http package","asyncworker.rabbitmq package","asyncworker.signals package","asyncworker.signals.handlers package","asyncworker.sse package","asyncworker.testing package","asyncworker.types package","asyncworker","Hooks de startup e shudtdown","Asyncworker App","Sobre a classe principal App","Compartilhamento de dados e inicializa\u00e7\u00f5es ass\u00edncronas","Regras para cria\u00e7\u00e3o de um handler HTTP","HTTP","Tipos de Handlers","RabbitMQ","Guia de uso","In\u00edcio r\u00e1pido","Atualizando sua App Asyncworker","Utilit\u00e1rios","Rodando uma fun\u00e7\u00e3o em um intervalo fixo de tempo","Timeit","Compatibilidade de Vers\u00f5es do asyncowker"],titleterms:{"a\u00e7\u00e3o":36,"ass\u00edncrona":32,"atrav\u00e9":38,"atualiza\u00e7\u00e3o":[8,9,10,11,12,43],"c\u00f3digo":36,"class":31,"cria\u00e7\u00e3o":33,"depend\u00eancia":43,"documenta\u00e7\u00e3o":17,"estar\u00e1":33,"fun\u00e7\u00e3o":41,"in\u00edcio":38,"inicializa\u00e7\u00f5":32,"introdu\u00e7\u00e3o":18,"m\u00faltipla":42,"par\u00e2metro":33,"parametriza\u00e7\u00e3o":33,"r\u00e1pido":38,"requisi\u00e7\u00f5":38,"s\u00e3o":33,"ser\u00e1":36,"transa\u00e7\u00f5":42,"unit\u00e1rio":15,"utilit\u00e1rio":40,"vers\u00f5":43,adicionai:36,amqpconnect:36,apena:33,aplicando:13,app:[19,29,30,31,32,39],armazenando:32,asyncowk:43,asyncwork:[17,19,20,21,22,23,24,25,26,27,28,30,31,39],atualizando:39,base:[23,24],bem:17,bucket:19,bulk_siz:36,cada:36,callabl:33,campo:36,changelog:0,compartilhamento:32,compatibilidad:43,completo:36,conf:19,connect:[19,20],consum:[19,25],consumindo:38,content:[19,20,21,22,23,24,25,26,27],contexto:42,criando:31,customizado:13,dada:36,dado:[32,38],decor:[13,21,33,36,42],definindo:31,desenvolvimento:14,easyqueu:20,endpoint:38,env:33,escolh:33,escolhendo:36,escrevendo:15,escutando:33,event:38,except:[19,20],exemplo:36,fila:38,fixo:41,flush:36,gerenciador:42,guia:[14,37],handler:[13,24,31,33,35],hook:29,http:[13,21,24,33,34,38],incompatibilidad:16,indic:17,individualment:36,intervalo:41,lendo:38,mai:[33,36],mensgem:36,messag:[20,22,25],modul:[19,20,21,22,23,24,25,26,27],nota:[8,9,10,11,12,36],nova:31,objeto:33,ofici:17,ond:33,option:[19,36],packag:[19,20,21,22,23,24,25,26,27],para:[33,36],parametro:36,path:33,porta:33,prefetch:36,princip:31,projeto:17,qual:36,que:33,queue:20,rabbitmq:[22,24,36,38],recebem:33,recebendo:[33,38],recebida:36,registri:27,regra:33,request:33,resolv:27,rodando:[38,41],rout:[19,33,36],run_on_shutdown:29,run_on_startup:29,server:[33,38],seu:38,shudtdown:29,side:38,signal:[23,24],sobr:[31,36],sse:[24,25],startup:29,sua:[31,39],submodul:[19,20,21,22,23,24,25,27],subpackag:[19,23],tabl:17,task_runn:19,tempo:41,test:[15,26],time:19,timeit:42,timeout:36,tipo:35,type:27,uma:[31,36,38,41],uso:37,util:19,valor:36,vindo:[17,33],worker:38,wrapper:21}})