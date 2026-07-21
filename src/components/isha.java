import java.util.ArrayList;

// class ComplexDefinition{
//     String extobjid;

// }

class ComplexData{

}

class Complex{
    Integer variableId;
    Integer isArray;
    Integer extobjid;
}

class PrimitiveArray{
    Integer variableId;
    Integer isArray;
    Integer extobjid;
}

private String CopyWorkitem (String processInstanceId, String workitemId){

    List<Complex> complexVariables = new ArrayList<>();
    List<PrimitiveArray> primitiveArray = new ArrayList<>();
    String query = "Select variable id, type, extobjid and unbounded from varmappingtable where processdefid=1 and extobjid>1"; 
    if(unounded=="Y"){
        isArray = true;   
    }
    // fetch variable id, variabe type, unbounded and extobj id from result set, put it in object and add object to list.
    // if variable type==11 then it is a complex else primitive array, thus the iteration

    for(iterate.complexVariables.size()){
        parentVarFieldId=0;
        varFieldId=1;
        // extobjid = already fetched
        
        CopyComplex(complexVariables[i]);
    }

}

private String CopyComplex(complexVariable){

}