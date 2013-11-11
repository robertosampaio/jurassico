using UnityEngine;
using System.Collections;
 
public class CamMouse : MonoBehaviour {
    void Update () {
        transform.position = new Vector3(Input.mousePosition.x,
             Input.mousePosition.y,
             Input.mousePosition.z);
    }
}
