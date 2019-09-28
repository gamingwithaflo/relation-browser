package ch.nerdin.kube.relation;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.util.List;

import javax.enterprise.context.ApplicationScoped;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.fabric8.openshift.api.model.DeploymentConfig;

@ApplicationScoped
public class MockRelationRepository extends RelationRepository {

    public MockRelationRepository() {
        super(null);
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<DeploymentConfig> getNodes(String namespace) {
        ObjectMapper mapper = new ObjectMapper();
        try {
            File resource = new File(getClass().getResource("/mock/deployment-config-list.json").toURI());
            return mapper.readValue(new String(Files.readAllBytes(resource.toPath())), List.class);
        } catch (IOException | URISyntaxException e) {
            throw new RuntimeException("could not parse json", e);
        }
    }
}
