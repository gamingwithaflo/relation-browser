package ch.nerdin.kube.relation;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;

import io.fabric8.kubernetes.client.KubernetesClient;
import io.fabric8.openshift.api.model.DeploymentConfig;
import io.fabric8.openshift.client.OpenShiftClient;
import io.quarkus.arc.DefaultBean;

@DefaultBean
@ApplicationScoped
public class RelationRepository {

    private final KubernetesClient kubernetesClient;

    @SuppressWarnings("WeakerAccess")
    public RelationRepository(KubernetesClient client) {
        this.kubernetesClient = client;
    }

    public List<DeploymentConfig> getNodes(String namespace) {
        OpenShiftClient openshiftClient = kubernetesClient.adapt(OpenShiftClient.class);
        return openshiftClient.deploymentConfigs().inNamespace(namespace).list().getItems();
    }
}

