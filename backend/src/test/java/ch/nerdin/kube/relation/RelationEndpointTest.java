package ch.nerdin.kube.relation;

import java.util.HashMap;

import javax.inject.Inject;

import io.fabric8.kubernetes.api.model.PodListBuilder;
import io.fabric8.kubernetes.client.server.mock.KubernetesServer;
import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.Matchers.containsInAnyOrder;

@QuarkusTest
class RelationEndpointTest {

    @Inject
    private KubernetesServer server;

    @Test
    void getList() {
        // given
        PodListBuilder builder = new PodListBuilder();
        HashMap<String, String> annotation = new HashMap<>();
        annotation.put("app.kubernetes.io/name", "mysql");
        builder.addNewItem().withNewMetadata().withAnnotations(annotation).withNamespace("test").and().and().addNewItem().and();
        server.expect().get().withPath("/api/v1/namespaces/test/pods").andReturn(200, builder.build()).once();

        given()

                .when().get("/api/relation")
                .then()
                .statusCode(200)
                .body("$.size()", is(2),
                      "metadata.annotations.'app.kubernetes.io/name'", containsInAnyOrder("mysql"));
    }
}