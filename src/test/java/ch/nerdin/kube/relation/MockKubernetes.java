package ch.nerdin.kube.relation;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Produces;

import io.fabric8.kubernetes.client.KubernetesClient;
import io.fabric8.kubernetes.client.server.mock.KubernetesServer;
import io.quarkus.test.Mock;

@ApplicationScoped
public class MockKubernetes {

    KubernetesServer server = new KubernetesServer();

    MockKubernetes() {
        server.before();
    }

    @Mock
    @Produces
    KubernetesClient getClient() {
        return server.getClient();
    }

    @Produces
    KubernetesServer getServer() {
        return server;
    }
}
