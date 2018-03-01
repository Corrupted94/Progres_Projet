import jbotsim.Topology;
import jbotsim.ui.JViewer;


public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Topology tp = new Topology ();
		
		tp.setDefaultNodeModel(ArbreCouvrant.class);
		
		new JViewer (tp);
	}

}
