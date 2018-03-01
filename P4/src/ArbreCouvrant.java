import java.awt.Color;
import java.util.ArrayList;

import jbotsim.Message;
import jbotsim.Node;



public class ArbreCouvrant extends Node{

	Node parent= null;
	ArrayList <Node> children = new ArrayList <Node> ();
	
	int countMessage = 0;
	@Override
	/**
	 * Si un noeud reçoit un DISCOVER et si son noeud parent==null, il renvoie un ACK au noeud emetteur
	 * Si un noeud reçoit un ACK, il ajoute le noeud emetteur du ACK dans la liste des fils
	 */
	public void onMessage(Message msg) {
		// TODO Auto-generated method stub
		//super.onMessage(msg);
		
		//SI message == DISCOVER
		if (msg.getContent().toString() == "DISCOVER")
		{
			if (parent == null)
			{
				this.parent= msg.getSender();
				send (parent, new Message ("ACK"));
			}
			this.setColor(Color.BLUE);
			sendAll (msg);
		}
		//SI message == ACK
		else if (msg.getContent().toString() == "ACK")
		{
			//ROOT
			if (parent == this)
			{
				if (this.getNeighbors().size()== children.size())
				{
					System.out.println ("Fin algo de construction de l'arbre couvrant");
					for (Node n : children)
					{
						send (n, new Message ("FLOODING_BROADCAST"));
					}
				}
			}
			
			else if (parent !=null)
			{
				children.add(msg.getSender());
				this.setColor(Color.RED);
			}
			
		}
		
		
		// SI message == FLOODING_BROADCAST
		else 
		{
			this.setColor(Color.RED);
			for (Node n: children)
			{
				send (n, msg);
			}
			
		}
		
		
	}

	@Override
	public void onSelection() {
		// TODO Auto-generated method stub
		this.parent = this;
		
		String contenu = "DISCOVER";
		Message msg = new Message (contenu);
		
		if (!this.getNeighbors().isEmpty())
		{
			send (this.getNeighbors().get(0), msg);
		}
		
	}

	
	
}
