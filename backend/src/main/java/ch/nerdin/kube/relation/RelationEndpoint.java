package ch.nerdin.kube.relation;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/api/relation")
public class RelationEndpoint {

    @Inject
    RelationRepository relationRepository;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{namespace}")
    public Response getList(@PathParam("namespace") String namespace) {
        return Response.ok(relationRepository.getNodes(namespace)).build();
    }
}
