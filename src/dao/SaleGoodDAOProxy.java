package dao;

import java.sql.SQLException;
import java.util.List;

import model.SaleGood;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import uitls.DatabaseConnection;

public class SaleGoodDAOProxy implements ISaleGoodDAO{
	private DatabaseConnection dbc = null ;
    private ISaleGoodDAO dao = null ;
	public SaleGoodDAOProxy(){
        try{
            this.dbc = new DatabaseConnection() ;
        }catch(Exception e){
            e.printStackTrace() ;
        }
        this.dao = new SaleGoodDAOImpl(dbc.getConnection()) ;
    }
	public SaleGood getGoodByID(SaleGood good) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean createSaleGood(SaleGood good) throws Exception {
		// TODO Auto-generated method stub
		return this.dao.createSaleGood(good);
	}


	@Override
	public JSONObject extractJSONArray(int page, int type) throws SQLException {
		// TODO Auto-generated method stub
		return this.dao.extractJSONArray(page, type);
	}
	@Override
	public JSONObject GoodDetail(int id) throws SQLException {
		// TODO Auto-generated method stub
		return this.dao.GoodDetail(id);
	}
	@Override
	public JSONObject Serach(String str,int page) throws SQLException {
		// TODO Auto-generated method stub
		return this.dao.Serach(str,page);
	}

}
