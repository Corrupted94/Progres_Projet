import java.awt.Color;

import jbotsim.Message;
import jbotsim.Node;


public class FloodingBroadcast extends Node {

	Node parent = null;
	String donnee = "";
	@Override
	public void onMessage(Message msg) {
		if (parent== null)
		{
			this.parent = msg.getSender();
			this.setColor(Color.RED);
		}
		
		if (donnee == "")
		{
			donnee = msg.getContent().toString();
			/*for (Node n : this.getNeighbors())
			{
				if (n != parent)
				{
					send (n, msg);
				}
			}*/
			sendAll (msg);
		}
		/*/else
		{
			
		}*/
		
		
	}

	@Override
	public void onSelection() {
		// TODO Auto-generated method stub
		this.parent = this;
			
		donnee = "FLOODING_BROADCAST";
		Message msg = new Message (donnee);
		
		
		
		sendAll (msg);
		
	} 
	

}
