package ch.nerdin.kube.relation;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.util.List;

import javax.enterprise.context.ApplicationScoped;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.fabric8.kubernetes.api.model.Pod;

@ApplicationScoped
public class MockRelationRepository extends RelationRepository {

    public MockRelationRepository() {
        super(null);
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<Pod> getNodes() {
        ObjectMapper mapper = new ObjectMapper();
        try {
            File resource = new File(getClass().getResource("/mock/pod-list.json").toURI());
            return mapper.readValue(new String(Files.readAllBytes(resource.toPath())), List.class);
        } catch (IOException | URISyntaxException e) {
            throw new RuntimeException("could not parse json", e);
        }
    }
}
