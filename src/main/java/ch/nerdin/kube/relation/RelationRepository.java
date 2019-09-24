package ch.nerdin.kube.relation;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;

import io.fabric8.kubernetes.api.model.Pod;
import io.fabric8.kubernetes.client.KubernetesClient;

@ApplicationScoped
public class RelationRepository {

    private final KubernetesClient kubernetesClient;

    public RelationRepository(KubernetesClient client) {
        this.kubernetesClient = client;
    }

    public List<Pod> getNodes() {
        List<Pod> items = kubernetesClient.pods().list().getItems();
        return items;
//        return items.stream().filter(p ->
//         p.getMetadata() != null && p.getMetadata().getLabels().get("app.openshift.io/runtime") != null
//        ).collect(Collectors.toList());
    }
}
