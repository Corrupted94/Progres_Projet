import java.awt.Color;
import java.util.Random;

import jbotsim.Message;
import jbotsim.Node;


public class ProbabilisticFlooding extends Node{
	
	int proba = 4;
	Node parent = null;
	Random rand = new Random ();
	String donnee = "";
	@Override
	public void onMessage(Message msg) {
		// TODO Auto-generated method stub
		if (this.parent == null)
		{
			this.parent = msg.getSender();
		}
		
			int alea = rand.nextInt(11);
			if (alea <= proba)
			{
				donnee = msg.getContent().toString();
				sendAll(msg);
				this.setColor(Color.RED);
			}
		
		
		
	}

	@Override
	public void onSelection() {
		// TODO Auto-generated method stub
		this.parent = this;
		
		donnee = "PROBA_FLOODING";
		Message msg = new Message (donnee);
		
		
		sendAll (msg);
	}

}
