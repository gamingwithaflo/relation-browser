package ch.nerdin.kube.relation;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;

import io.fabric8.kubernetes.api.model.Pod;
import io.fabric8.kubernetes.client.KubernetesClient;
import io.quarkus.arc.DefaultBean;

@DefaultBean
@ApplicationScoped
public class RelationRepository {

    private final KubernetesClient kubernetesClient;

    @SuppressWarnings("WeakerAccess")
    public RelationRepository(KubernetesClient client) {
        this.kubernetesClient = client;
    }

    public List<Pod> getNodes() {
        return kubernetesClient.pods().list().getItems();
    }
}

